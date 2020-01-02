<template>
  <div class="main">
    <div class="container">
      <transition name="fade">
        <div class="main" v-show="!isConnected">
          <div class="container">
            <div class="has-text-centered">
              <img src="~@/assets/images/broken.png" />
            </div>
            <div class="has-text-centered m-t-xl">
              <code>{{errorMessage}}</code>
              <h1 class="is-size-1 m-t-lg">Could not connect to the Miner API</h1>
              <p>Please make sure that NoncerPro Miner is up and running</p>
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="isConnected">
          <section class="m-t-lg">
            <div class="columns is-variable">
              <div class="column">
                <single-stat
                  name="hashrate"
                  text="Hashrate"
                  :value="humanHashRate(vars.totalHashrate)"
                ></single-stat>
              </div>
              <div class="column">
                <single-stat text="Submitted Shares" name="totalShares" :value="vars.totalShares"></single-stat>
              </div>
              <div class="column">
                <single-stat text="Active GPUs" name="activeGpus" :value="vars.activeGpus"></single-stat>
              </div>

              <div class="column">
                <single-stat text="Invalid Shares" name="invalidShares" :value="vars.invalidShares"></single-stat>
              </div>
            </div>
          </section>

          <section class="m-t-lg">
            <div class="box" style="height:50vh;">
              <div class="m-b-lg chart-top">
                <h2 class="title is-5">Hashrate</h2>
                <div class="actions">
                  <button
                    @click="activeSpan=24"
                    :class="[isActive(24)?'is-info':'']"
                    class="button is-small is-rounded m-l-sm"
                  >Last 24 hrs</button>
                  <button
                    @click="activeSpan=12"
                    :class="[isActive(12)?'is-info':'']"
                    class="button is-small is-rounded m-l-sm"
                  >Last 12 hrs</button>
                  <button
                    @click="activeSpan=3"
                    :class="[isActive(3)?'is-info':'']"
                    class="button is-small is-rounded m-l-sm"
                  >Last 3 hrs</button>
                  <button
                    @click="activeSpan=1"
                    :class="[isActive(1)?'is-info':'']"
                    class="button is-small is-rounded m-l-sm"
                  >Last 1 hr</button>
                </div>
              </div>
              <line-chart
                v-if="chartData"
                style="height: 80%"
                :chart-data="chartData"
                :gradient-colors="gradientColors"
                :gradient-stops="gradientStops"
                :extra-options="chartOptions"
              ></line-chart>
            </div>
          </section>

          <section class="m-t-lg">
            <div class="flex-2-right-left">
              <h2 class="title is-5 m-b-none">Miner Wallet:</h2>
              <span
                class="tag is-normal has-text-weight-bold"
                :class="[vars.devMining ? 'is-info' : 'is-success']"
                v-html="devMiningMessage"
              ></span>
            </div>
            <div class="box m-t-md">{{vars.wallet}}</div>
          </section>

          <section class="m-t-lg">
            <div class="columns is-6 is-variable">
              <div class="column">
                <h2 class="is-size-6 has-text-weight-bold">Connected Pool:</h2>
                <div class="box m-t-md">{{vars.server}}</div>
              </div>
              <div class="column">
                <h2 class="is-size-6 has-text-weight-bold">Device ID:</h2>
                <div class="box m-t-md">{{vars.deviceId}}</div>
              </div>
              <div class="column">
                <h2 class="is-size-6 has-text-weight-bold">Device Name:</h2>
                <div class="box m-t-md">{{vars.deviceName}}</div>
              </div>
            </div>
          </section>

          <section class="m-t-lg" v-if="vars.devices.length">
            <h2 class="title is-5">Per GPU Stats:</h2>
            <div class="box m-b-md" v-for="item in vars.devices" :key="item.gpuId">
              <div class="flex-2-right-left">
                <span>GPU #{{item.gpuId}}</span>
                <span
                  class="hashrate is-size-6 has-text-link is-family-secondary has-text-weight-bold"
                  v-html="humanHashRate(item.hashrate)"
                ></span>
              </div>
            </div>
          </section>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import SingleStat from "@/components/SingleStat";
import LineChart from "@/components/charts/LineChart";
import * as chartConfigs from "@/components/charts/config";
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      isConnected: false,
      errorMessage: "",
      chartData: null,
      chartOptions: chartConfigs.barChartOptionsGradient,
      gradientColors: chartConfigs.colors.purpleGradient,
      gradientStops: [1, 0.8, 0],
      interval: false,
      interval2: false,
      activeSpan: 1,
      chartIntervalSec: 60 * 5,
      hashrates: [],
      chartLabels: [],
      vars: {
        totalHashrate: 0,
        wallet: "...",
        deviceId: "...",
        deviceName: "...",
        server: "....",
        devices: [
          {
            gpuId: 1,
            hashrate: 1000
          }
        ],
        devMining: false
      },
      connected: true,
      loading: true
    };
  },
  components: {
    SingleStat,
    LineChart
  },
  created() {
    this.getDataFromApi();
    this.interval = setInterval(this.getDataFromApi, 3 * 1000);

    this.saveData();
    this.interval2 = setInterval(this.saveData, 60 * 1000);
  },
  mounted() {},
  destroyed() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
  },
  methods: {
    getDataFromApi() {
      axios
        .get("/api")
        .then(response => {
          this.vars = response.data;
          this.isConnected = true;
        })
        .catch(error => {
          this.isConnected = false;
          this.errorMessage = error;
          console.error(error);
        });
    },
    isActive(span) {
      return this.activeSpan === span;
    },
    async updateData() {
      let rows = await this.$Dexie.totalHashRate
        .where("date")
        .above(
          this.$moment()
            .subtract(this.activeSpan, "hour")
            .unix()
        )
        .sortBy("date");

      rows = rows.filter((a, i) => i % (this.activeSpan * 3) == 0);

      this.chartLabels.length = 0;
      this.hashrates.length = 0;
      rows.forEach(row => {
        this.hashrates.unshift({
          x: new Date(row.date * 1000),
          y: row.hash_rate
        });
      });
      this.chartData = {
        datasets: [
          {
            ...chartConfigs.bigChartDatasetOptions,
            data: this.hashrates
          }
        ]
      };
    },
    saveData() {
      const now = this.$moment().unix();
      // delete save to db
      this.$Dexie.totalHashRate
        .where("date")
        .below(now - 24 * 60)
        .delete();
      this.$Dexie.totalHashRate.put({
        date: now,
        hash_rate: this.vars.totalHashrate
      });

      // update chart data
      this.updateData();
    },
    getFakeData() {
      const d1 = this.getRandomInt(2000);
      const d2 = this.getRandomInt(2000);
      const d3 = this.getRandomInt(2000);
      const all = d1 + d2 + d3;

      this.vars = {
        totalHashrate: all,
        totalShares: this.getRandomInt(100),
        invalidShares: this.getRandomInt(10),
        activeGpus: 3,
        wallet: "LJKG976SDFAOIUSDF9G876SDFG",
        deviceId: "2",
        deviceName: "GHULU",
        server: "api.noncer.pro",
        devices: [
          {
            gpuId: 1,
            hashrate: d1
          },
          {
            gpuId: 2,
            hashrate: d2
          },
          {
            gpuId: 3,
            hashrate: d3
          }
        ],
        devMining: Math.random() > 0.5
      };
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    makeTimeDots() {
      const intervalMinuetes = this.chartIntervalSec / 60; // 5
      const max = (this.activeSpan * 60) / intervalMinuetes;
      const time = [];
      var formattedTime;
      for (let i = 0; i < max + 1; i++) {
        formattedTime = this.$moment()
          .subtract(i * intervalMinuetes, "minute")
          .unix();
        time.push(Math.floor(formattedTime / 60) * 60);
      }
      // console.log(time)
      return time;
    }
  },
  computed: {
    // a computed getter
    devMiningMessage() {
      if (this.vars.devMining) {
        return "Dev Mining&nbsp;&nbsp;&nbsp;ON";
      }
      return "Dev Mining&nbsp;&nbsp;&nbsp;OFF";
    }
  },
  watch: {
    activeSpan(newval) {
      // console.log(newval)
      this.chartIntervalSec = newval * 5 * 60;
      this.updateData();
    }
  }
};
</script>

<style>
.chart-top {
  display: flex;
  justify-content: space-between;
}
</style>
