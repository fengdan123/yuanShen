<template>
  <div :class="$style.footer">
    <div>
      <div>
        <img src="@/assets/img/logo_1565599399_2713.png" />
        <span></span>
        <img src="@/assets/img/ys_1565764084_7084.png" />
      </div>
      <div>
        <div>
          <a
            href="https://ys.mihoyo.com/company/agreement"
            class="protocol"
            target="_blank"
            >用户协议</a
          >|
          <a
            href="https://ys.mihoyo.com/company/privacy"
            class="protocol"
            target="_blank"
            >隐私政策</a
          >|
          <a
            class="protocol"
            href="https://jiazhang.mihoyo.com/#/"
            target="_blank"
            >家长监护工程</a
          >|
          <a
            href="http://www.mihayou.com/company.html"
            target="_blank"
            class="about-us protocol"
            >关于我们</a
          >|
          <a
            href="http://www.mihayou.com/contact.html"
            target="_blank"
            class="contract-us protocol"
            >联系我们</a
          >|
          <a
            href="http://www.mihayou.com/add.html"
            target="_blank"
            class="join-us protocol"
            >加入我们</a
          >
        </div>
        <div>
          <p>
            健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。
          </p>
          <div>
            <div></div>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402001113"
              target="_blank"
            >
              沪公网安备31010402001113号
            </a>
            <span :class="$style.line"> | </span>
            <span>增值电信业务经营许可证：沪B2-20190555</span>
          </div>
        </div>
        <div>
          <div>
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              >沪ICP备19018275号-4</a
            ><span :class="$style.line"> | </span> <span> 沪网文〔2019〕3168-216号 </span
            ><span :class="$style.line"> | </span>
            <span>国新出审【2019】2978号</span>
          </div>
          <div>
            <span> 互联网违法不良信息举报邮箱: tousu@mihoyo.com </span>
            <span>
              互联网违法不良信息举报电话: 021-34203135 （工作时间：每天10点 -
              20点）
            </span>
          </div>
        </div>
        <div>
          亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。
        </div>
        <div>©2012-2020 上海米哈游影铁科技有限公司版权所有</div>
        <div>
          <a
            href="https://v.yunaq.com/certificate?domain=www.mihoyo.com&amp;from=label&amp;code=90020"
            target="_blank"
            style="
              background-image: url('https://uploadstatic.mihoyo.com/bh3/upload/officialsites/201911/shiming_1575020038_4113.png');
            "
          >
          </a>
          <a
            href="http://www.shjbzx.cn/"
            target="_blank"
            style="
              background-image: url('https://uploadstatic.mihoyo.com/bh3/upload/officialsites/201911/jubao_1575020039_5071.png');
            "
          >
          </a>
          <a
            href="https://www.12377.cn/"
            target="_blank"
            style="
              background-image: url('https://uploadstatic.mihoyo.com/bh3/upload/officialsites/202005/youhai_1589857356_1416.png');
            "
          >
          </a>
          <a
            href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/toDetail/8955A9DDE1FF8B6CE053010A14ACA87F"
            target="_blank"
            style="
              background-image: url('https://uploadstatic.mihoyo.com/bh3/upload/officialsites/201911/culture_1575020039_5478.png');
            "
          >
          </a>
          <a
            href="javascript:void(0)"
            style="
              background-image: url('https://uploadstatic.mihoyo.com/bh3/upload/officialsites/201911/e110_1575020039_7486.png');
            "
          >
          </a>
          <a
            href="http://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&amp;serial=9031000020190314100540000004452331-SAIC_SHOW_310000-20200120150237277642&amp;signData=MEYCIQCjn9IhIKfUHjPlx9W6xrYPZ4GA73Blopwp0iEzSX0OHQIhAOZm3tnlWLrgVXMtvgp5OibauIgiAa+2d+MQ7qzMIm6t"
            target="_blank"
            style="
              background-image: url('https://uploadstatic.mihoyo.com/bh3/upload/officialsites/201911/zhizhao_1575020039_4362.png');
            "
          >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios({
      url:
        "https://webstatic.mihoyo.com/admin/mi18n/plat_cn/m202004281054311/m202004281054311-zh-cn.json?",
    }).then((res) => {
      for (let item in res.data) {
        res.data[item] = JSON.parse(res.data[item]);
      }
      this.list = res.data;
      console.log(this.list);
    });
  },
  data() {
    return {
      list: {},
    };
  },
};
</script>

<style module>
.footer {
  width: 100vw;
  height: 320px;
  background-color: black;
}
.footer > div {
  padding: 30px 0;
  /* background: #000; */
  color: #999;
  font-size: 14px;
  padding-bottom: 20px;
  height: 100%;
  width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer > div > div:nth-of-type(1) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 300px;
}
.footer > div > div:nth-of-type(1) > img:nth-of-type(1) {
  height: 42px;
}
.footer > div > div:nth-of-type(1) > span {
  width: 1px;
  height: 28px;
  background: #666;
  margin-left: 25px;
  margin-right: 25px;
}
.footer > div > div:nth-of-type(1) > img:nth-of-type(2) {
  width: 110px;
}
.footer > div > div:nth-of-type(2) {
  line-height: 24px;
  color: #aaa;
  height: 100%;
  flex: 1;
  margin-left: 60px;
}
.footer > div > div:nth-of-type(2) > div:nth-of-type(1) {
  color: white;
  margin-bottom: 28px;
}
.footer > div > div:nth-of-type(2) > div:nth-of-type(1) > a {
  color: white;
  margin: 0 8px 0 5px;
}
.footer > div > div:nth-of-type(2) a:hover {
  text-decoration: underline;
}
.footer > div > div:nth-of-type(2) > div:nth-of-type(2) {
  line-height: 1.5;
}
.footer > div > div:nth-of-type(2) a {
  color: #999;
}
.footer > div > div:nth-of-type(2) span.line{
    margin-left: 10px;
    margin-right: 10px;
    display: inline-block;
}
.footer > div > div:nth-of-type(2) > div:nth-of-type(6){
    display: flex;
    padding: 10px 0;
}
.footer > div > div:nth-of-type(2) > div:nth-of-type(6) > a {
  display: block;
  width: 116px;
  height: 46px;
  margin-right: 15px;
  background-size: 116px 46px;
  margin-bottom: 10px;
}
</style>