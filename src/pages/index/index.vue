<template>
  <div
    :class="$style.index"
    style="font-size: 70px"
    id="index"
    @click="$refs.freeze.fn1()"
  >
    <div @mousewheel="changePage" id="indexContent">
      <div :class="$style.page1">
        <router-link to="/main" target="_blank">
          <img src="@/assets/img/image.png"
        /></router-link>
        <router-link to="/main" target="_blank"></router-link>
        <div>
          <div></div>
          <v-video-play
            ref="videoPlay"
            @mouseenter.native="$refs.videoPlay.isshow = false"
            @mouseleave.native="$refs.videoPlay.isshow = true"
            @click.native.stop="
              playVideo(
                'https://uploadstatic.mihoyo.com/hk4e/upload/officialsites/202012/1.2PV.mp4'
              )
            "
          ></v-video-play>
          <div>
            <div>
              <img src="@/assets/img/yuanshenerweima.png" />
              <div>
                <a
                  href="https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/android_default"
                  target="_blank"
                ></a>
                <a
                  href="https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/pc_default"
                  target="_blank"
                ></a>
                <a
                  href="https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/taptappc_default"
                  target="_blank"
                ></a>
                <a
                  href="https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/ps4_default"
                  target="_blank"
                ></a>
              </div>
              <a
                href="https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/pc_default"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.page2">
        <div>
          <div
            @mouseenter="enter"
            @mouseleave="out"
            v-for="(item, index) in page2"
            :key="index"
            @click.stop="page2_f(index, 0)"
          >
            <img :src="item[0]" />
            <img :src="item[1]" />
          </div>
        </div>
      </div>
      <div :class="$style.page3">
        <transition
          enter-active-class="animate_animated animate__fadeIn"
          leave-active-class="animate_animated animate__fadeOut"
        >
          <div v-show="page3_isshow">
            <div></div>
            <div></div>
            <div>
              <img src="@/assets/img/image16.png" />
              <img src="@/assets/img/image17.png" />
            </div>
            <div>
              <img src="@/assets/img/image18.png" />
              <div>
                <v-video-play
                  ref="videoPlay1"
                  @mouseenter.native="$refs.videoPlay1.isshow = false"
                  @mouseleave.native="$refs.videoPlay1.isshow = true"
                  @click.native.stop="
                    playVideo(
                      'https://uploadstatic.mihoyo.com/hk4e/upload/officialsites/202012/_gameplayPV_albedo_final.mp4'
                    )
                  "
                ></v-video-play>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
              <img src="@/assets/img/image20.png" />
              <div>
                <span></span>
                <span @click.stop="page3_isshow = false"></span>
              </div>
            </div>
          </div>
        </transition>
        <transition
          enter-active-class="animate_animated animate__fadeIn"
          leave-active-class="animate_animated animate__fadeOut"
        >
          <div v-show="!page3_isshow">
            <div></div>
            <div></div>
            <div>
              <img src="@/assets/img/image21.png" />
              <img src="@/assets/img/image22.png" />
            </div>
            <div>
              <img src="@/assets/img/image23.png" />
              <div>
                <v-video-play
                  ref="videoPlay1"
                  @mouseenter.native="$refs.videoPlay1.isshow = false"
                  @mouseleave.native="$refs.videoPlay1.isshow = true"
                  @click.native.stop="$refs.dialog.isshow = true"
                ></v-video-play>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
              <img src="@/assets/img/image20.png" />
              <div>
                <span @click.stop="page3_isshow = true"></span>
                <span></span>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div :class="$style.page4">
        <div></div>
        <div>
          <ul id="page4_active">
            <li v-for="(item, index) in page4_img" :key="index">
              <img :src="item[0]" />
              <img :src="item[1]" />
              <img
                src="@/assets/img/image24.png"
                v-if="index == 2 || index == 3"
                @click.stop="page2_f(0, index)"
              />
            </li>
          </ul>
          <ul>
            <li
              v-for="(item, index) in page4_bottom_img"
              :key="index"
              @click.stop="changeImg(index)"
            >
              <img :src="item[0]" v-show="!item[2]" />
              <img :src="item[1]" v-show="item[2]" />
            </li>
          </ul>
        </div>
      </div>
      <div :class="$style.page5">
        <div>
          <div>
            <img src="@/assets/img/page5_img1.png" />
          </div>
          <div>
            <div id="page5_animate">
              <div :class="$style.active1">
                <img
                  src="https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/b1.bef26d78.jpg"
                />
              </div>
              <div :class="$style.active2">
                <img
                  src="https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/b2.db8abedd.jpg"
                />
              </div>
              <div :class="$style.active3">
                <img
                  src="https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/b3.25c46b8e.jpg"
                />
              </div>
              <div :class="$style.active4">
                <img
                  src="https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/b4.660c2998.jpg"
                />
              </div>
              <div :class="$style.active5">
                <img
                  src="https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/b5.532e2321.jpg"
                />
              </div>
            </div>
            <div>
              <ul id="page5_li">
                <li :class="$style.active" @click="change_li(0)"></li>
                <li @click="change_li(1)"></li>
                <li @click="change_li(2)"></li>
                <li @click="change_li(3)"></li>
                <li @click="change_li(4)"></li>
              </ul>
            </div>
            <div
              @mouseenter="page5_left = false"
              @mouseleave="page5_left = true"
              @click="left_btn()"
            >
              <img src="@/assets/img/image26.png" v-show="page5_left" />
              <img src="@/assets/img/image27.png" v-show="!page5_left" />
            </div>
            <div
              @mouseenter="page5_right = false"
              @mouseleave="page5_right = true"
              @click="right_btn()"
            >
              <img src="@/assets/img/image28.png" v-show="page5_right" />
              <img src="@/assets/img/image29.png" v-show="!page5_right" />
            </div>
          </div>
          <div>
            <a
              href="https://weibo.com/ysmihoyo"
              target="_blank"
              @mouseenter="page5_isshow1 = false"
              @mouseleave="page5_isshow1 = true"
            >
              <img src="@/assets/img/image30.png" />
              <img src="@/assets/img/image31.png" v-show="!page5_isshow1" />
            </a>
            <div
              @mouseenter="page5_isshow2 = false"
              @mouseleave="page5_isshow2 = true"
            >
              <img src="@/assets/img/image32.png" />
              <img src="@/assets/img/image33.png" v-show="!page5_isshow2" />
            </div>
            <a
              href="https://space.bilibili.com/401742377/"
              target="_blank"
              @mouseenter="page5_isshow3 = false"
              @mouseleave="page5_isshow3 = true"
            >
              <img src="@/assets/img/image34.png" />
              <img src="@/assets/img/image35.png" v-show="!page5_isshow3" />
            </a>
            <a
              href="https://bbs.mihoyo.com/ys/"
              target="_blank"
              @mouseenter="page5_isshow4 = false"
              @mouseleave="page5_isshow4 = true"
            >
              <img src="@/assets/img/image36.png" />
              <img src="@/assets/img/image37.png" v-show="!page5_isshow4" />
            </a>
          </div>
        </div>
      </div>
      <v-footer></v-footer>
    </div>
    <v-freeze ref="freeze"></v-freeze>
    <v-video ref="video"></v-video>
    <v-banner
      :page2_banner="page2_banner"
      :list="banner_img"
      v-if="page2_banner.isshow"
    ></v-banner>
    <v-dialog ref="dialog"></v-dialog>
    <left-nav></left-nav>
  </div>
</template>

<script>
import image4 from "@/assets/img/image4.png";
import image5 from "@/assets/img/image5.png";
import image6 from "@/assets/img/image6.png";
import image7 from "@/assets/img/image7.png";
import image8 from "@/assets/img/image8.png";
import image9 from "@/assets/img/image9.png";
import image10 from "@/assets/img/image10.png";
import image11 from "@/assets/img/image11.png";
import image12 from "@/assets/img/image12.png";
import image13 from "@/assets/img/image13.png";
import image14 from "@/assets/img/image14.png";
import image15 from "@/assets/img/image15.png";
import image49 from "@/assets/img/image49.png";
import image49hover from "@/assets/img/image49hover.png";
import image50 from "@/assets/img/image50.png";
import image50hover from "@/assets/img/image50hover.png";
import image51 from "@/assets/img/image51.png";
import image51hover from "@/assets/img/image51hover.png";
import image52 from "@/assets/img/image52.png";
import image52hover from "@/assets/img/image52hover.png";
import vFreeze from "./components/freeze";
import vVideoPlay from "./components/videoPlay";
import vBanner from "./components/banner";
import leftNav from "./components/leftNav"
export default {
  data() {
    return {
      page2: [
        [image4, image5],
        [image6, image7],
        [image8, image9],
        [image10, image11],
        [image14, image15],
        [image12, image13],
      ],
      page2_banner: {
        banner_id: 0,
        isshow: false,
      },
      banner_img: [],
      gMouseLock: true,
      active: 0,
      page3_isshow: true,
      page4_img: [
        [
          "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/card.575ddfc3.png",
          "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/side.b1565565.png",
        ],
        [
          "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/card.820cbba4.png",
          "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/side.9337cd65.png",
        ],
        [
          "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/card.5d114421.png",
          "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/side.b3453850.png",
        ],
        [
          "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/card.c9aec38c.png",
          "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/side.e9360b45.png",
        ],
      ],
      page4_bottom_img: [
        [image49, image49hover, true],
        [image50, image50hover, false],
        [image51, image51hover, false],
        [image52, image52hover, false],
      ],
      page2_banner_img: [
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/fuxue.1fa4ff33.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/mianlong.92010651.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/jiugong.c4bda996.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/hantian.9ccaca12.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/xingying.9fb3fafa.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/jinjiao.93f6a771.png",
      ],
      page4_banner_img_gw: [
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/m1.679d5a5a.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/m2.46f47257.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/m3.aa3253c1.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/m4.11f4a664.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/m5.9f3354ec.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/m6.0cb978a5.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/m7.29ddb52b.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/m8.097d4958.png",
      ],
      page4_banner_img_active: [
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/e1.eaa33c6d.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/e2.3932d9ad.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/e3.1c674b06.png",
        "https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/e4.20d15e7e.png",
      ],
      page5_active: ["active1", "active2", "active3", "active4", "active5"],
      page5_num: 0,
      page5_timer: null,
      page5_right: true,
      page5_left: true,
      page5_isshow1: true,
      page5_isshow2: true,
      page5_isshow3: true,
      page5_isshow4: true,
    };
  },
  components: {
    vFreeze,
    vVideoPlay,
    vBanner,
    leftNav
  },
  methods: {
    refredhEm(Height) {
      var height = this.$("#index").height();
      if (height < 600) {
        height = 600;
      }
      var em = (height * 70) / Height;
      this.$("#index").css("fontSize", em + "px");
    },
    enter(e) {
      let eArr = e.target.children;
      eArr[0].setAttribute("style", "transform:scale(1)");
      eArr[1].setAttribute("style", "opacity:0");
    },
    out(e) {
      let eArr = e.target.children;
      eArr[0].setAttribute("style", "transform:scale(.88)");
      eArr[1].setAttribute("style", "opacity:1");
    },
    page2_f(index, n) {
      if (n == 0) {
        this.banner_img = this.page2_banner_img;
      } else if (n == 2) {
        this.banner_img = this.page4_banner_img_gw;
      } else if (n == 3) {
        this.banner_img = this.page4_banner_img_active;
      }
      this.page2_banner.isshow = true;
      this.page2_banner.banner_id = index;
    },
    changePage(e) {
      if (this.gMouseLock) {
        this.gMouseLock = false;
        let cdu = this.$("#indexContent").children().length;
        let distace = parseInt(this.$("#indexContent").css("marginTop"));
        if (e.deltaY > 0) {
          this.active++;
          if (this.active >= cdu) {
            this.active = cdu - 1;
            this.$("#indexContent").css("marginTop", distace);
            this.gMouseLock = true;
            return;
          }
          this.$("#indexContent").animate(
            {
              marginTop:
                distace -
                this.$("#indexContent")
                  .children()
                  .eq(this.active)
                  .innerHeight(),
            },
            500,
            () => {
              this.gMouseLock = true;
            }
          );
        } else {
          this.active--;
          if (this.active <= -1) {
            this.active = 0;
            this.$("#indexContent").css("marginTop", 0);
            this.gMouseLock = true;
            return;
          }
          this.$("#indexContent").animate(
            {
              marginTop:
                distace +
                this.$("#indexContent")
                  .children()
                  .eq(this.active+1)
                  .innerHeight(),
            },
            500,
            () => {
              this.gMouseLock = true;
            }
          );
        }
      }
    },
    playVideo(str) {
      this.$refs.video.isshow = true;
      this.$store.state.index_video_url = str;
    },
    changeImg(index) {
      this.page4_bottom_img.forEach((item) => {
        this.$set(item, 2, false);
      });
      this.$set(this.page4_bottom_img[index], 2, true);
      this.$("#page4_active").css(
        "marginLeft",
        -index * this.$("#page4_active").children().width()
      );
    },
    page5_animate() {
      let cdu = this.$("#page5_animate").children().length;
      if (this.page5_num >= cdu) {
        this.page5_num = 0;
      }
      this.$("#page5_li").children().removeClass();
      this.$("#page5_li")
        .children()
        .eq(this.page5_num)
        .addClass(this.$style.active);
      let q = 1;
      for (let i = this.page5_num; i < cdu; i++) {
        this.page5_active[i] = "active" + q;
        q++;
      }
      for (let i = 0; i < this.page5_num; i++) {
        this.page5_active[i] = "active" + (cdu - this.page5_num + i + 1);
      }
      this.page5_active.forEach((item, index) => {
        this.$("#page5_animate")
          .children()
          .eq(index)
          .removeClass()
          .addClass(this.$style[item]);
      });
    },
    change_li(index) {
      clearInterval(this.page5_timer);
      this.page5_num = index;
      this.page5_animate();
      this.page5_timer = setInterval(() => {
        this.page5_num++;
        this.page5_animate();
      }, 5000);
    },
    right_btn() {
      clearInterval(this.page5_timer);
      this.page5_num++;
      this.page5_animate();
      this.page5_timer = setInterval(() => {
        this.page5_num++;
        this.page5_animate();
      }, 5000);
    },
    left_btn() {
      clearInterval(this.page5_timer);
      this.page5_num--;
      this.page5_animate();
      this.page5_timer = setInterval(() => {
        this.page5_num++;
        this.page5_animate();
      }, 5000);
    },
  },
  mounted() {
    // let Height = this.$("#index").height();
    this.refredhEm(757);
    let _this = this;
    window.addEventListener(
      "resize",
      function () {
        _this.refredhEm(757);
      },
      false
    );
    this.page5_timer = setInterval(() => {
      this.page5_num++;
      this.page5_animate();
    }, 5000);
  },
  destroyed() {
    clearInterval(this.page5_timer);
  },
};
</script>

<style module>
.qaq {
  opacity: 0;
}
.qaq1 {
  opacity: 1;
}
.index {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.index > div:nth-of-type(1) {
  width: 100%;
  height: 100%;
  min-width: 1280px;
  position: relative;
}

/*page1*/
.page1 {
  width: 100%;
  height: 100%;
  background: url(@/assets/img/bg-93dbef39.png) top/cover no-repeat;
}
.page1 > a:nth-of-type(1) {
  position: absolute;
  top: 0.17em;
  left: 0.69em;
  width: 1.68em;
  height: 1.33em;
}
.page1 > a:nth-of-type(1) > img {
  display: block;
  width: 100%;
  height: 100%;
}
.page1 > a:nth-of-type(2) {
  position: absolute;
  top: 0.42em;
  right: 0.69em;
  width: 1.61em;
  height: 0.52em;
  background: url(@/assets/img/image38.png) 50% / contain no-repeat;
}
.page1 > a:nth-of-type(2):hover {
  background-image: url(@/assets/img/image38hover.png);
}
.page1 > div {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0.5em;
  left: 50%;
  transform: translate(-50%);
}
.page1 > div > div:nth-of-type(1) {
  /* margin: 0 auto; */
  width: 9.14em;
  height: 4.31em;
  background: url(https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/slogan.15d7310f.png)
    50% / cover no-repeat;
  margin-bottom: -0.2em;
}
.page1 > div > div:nth-of-type(2) {
  position: absolute;
  top: 3.35em;
  right: 1.93em;
  width: 0.87em;
  height: 0.87em;
  cursor: pointer;
}
/* .page1 > div > div:nth-of-type(3) {
} */
.page1 > div > div:nth-of-type(3) > div {
  position: relative;
  width: 537px;
  margin: auto;
  height: 141px;
  background: url(@/assets/img/page1_img1.png) 50% / contain no-repeat;
  display: flex;
  /* justify-content: space-around; */
  align-items: flex-end;
}
.page1 > div > div:nth-of-type(3) > div > img {
  width: 102px;
  margin-bottom: 12px;
  margin-left: 15px;
}
.page1 > div > div:nth-of-type(3) > div > div {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  justify-content: space-around;
  height: 102px;
  margin-bottom: 12px;
}
.page1 > div > div:nth-of-type(3) > div > div > a {
  width: 142px;
  height: 47px;
  cursor: pointer;
}
.page1 > div > div:nth-of-type(3) > div > div > a:nth-of-type(1) {
  background: url(@/assets/img/page1_ios.png) 50% / contain no-repeat;
}
.page1 > div > div:nth-of-type(3) > div > div > a:nth-of-type(1):hover {
  background: url(@/assets/img/page1_ioshover.png) 50% / contain no-repeat;
}
.page1 > div > div:nth-of-type(3) > div > div > a:nth-of-type(2) {
  background: url(@/assets/img/page1_android.png) 50% / contain no-repeat;
}
.page1 > div > div:nth-of-type(3) > div > div > a:nth-of-type(2):hover {
  background: url(@/assets/img/page1_androidhover.png) 50% / contain no-repeat;
}
.page1 > div > div:nth-of-type(3) > div > div > a:nth-of-type(3) {
  background: url(@/assets/img/page1_taptap.png) 50% / contain no-repeat;
  align-self: flex-end;
  height: 51px;
}
.page1 > div > div:nth-of-type(3) > div > div > a:nth-of-type(3):hover {
  background: url(@/assets/img/page1_taptaphover.png) 50% / contain no-repeat;
}
.page1 > div > div:nth-of-type(3) > div > div > a:nth-of-type(4) {
  background: url(@/assets/img/page1_ps4.png) 50% / contain no-repeat;
  align-self: flex-end;
  height: 51px;
}
.page1 > div > div:nth-of-type(3) > div > div > a:nth-of-type(4):hover {
  background: url(@/assets/img/page1_ps4hover.png) 50% / contain no-repeat;
}
.page1 > div > div:nth-of-type(3) > div > a {
  width: 104px;
  height: 101px;
  cursor: pointer;
  margin-bottom: 12px;
  background-image: url(@/assets/img/page1_pc.png);
}
.page1 > div > div:nth-of-type(3) > div > a:hover {
  background-image: url(@/assets/img/page1_pchover.png);
}

/*page2*/
.page2 {
  position: relative;
  height: 100vh;
  width: 100vw;
  min-width: 1280px;
}
.page2 > div {
  width: 100%;
  height: 100%;
  background: url(https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/bg.6d7567fe.png)
    50% / cover no-repeat;
}
.page2 > div > div {
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
}
.page2 > div > div:nth-of-type(1) {
  margin-left: 73.6125px;
  margin-top: -306.483px;
}
.page2 > div > div:nth-of-type(2) {
  margin-left: -147.7px;
  margin-top: -245px;
}
.page2 > div > div:nth-of-type(3) {
  margin-left: 58.8px;
  margin-top: -57.4px;
}
.page2 > div > div:nth-of-type(4) {
  margin-left: -4.9px;
  margin-top: 44.8px;
}
.page2 > div > div:nth-of-type(5) {
  margin-left: -103.036px;
  margin-top: 145.793px;
}
.page2 > div > div:nth-of-type(6) {
  margin-left: -389.715px;
  margin-top: -2.10278px;
}
.page2 > div > div > img:nth-of-type(1) {
  transform: scale(0.88);
  cursor: url(@/assets/img/page1_search.png), auto;
  transition: transform 0.3s;
}
.page2 > div > div > img:nth-of-type(2) {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transform: scale(0.88);
  cursor: url(@/assets/img/page1_search.png), auto;
  transition: all 0.3s;
}
.page2 > div > div:nth-of-type(1) > img:nth-of-type(1) {
  width: 2.65em;
  height: 1.14em;
}
.page2 > div > div:nth-of-type(2) > img:nth-of-type(1) {
  width: 2.5em;
  height: 1.15em;
}
.page2 > div > div:nth-of-type(3) > img:nth-of-type(1) {
  width: 2.96em;
  height: 1.15em;
}
.page2 > div > div:nth-of-type(4) > img:nth-of-type(1) {
  width: 2.53em;
  height: 1.15em;
}
.page2 > div > div:nth-of-type(5) > img:nth-of-type(1) {
  width: 2.6em;
  height: 1.15em;
}
.page2 > div > div:nth-of-type(6) > img:nth-of-type(1) {
  width: 3.07em;
  height: 1.15em;
}

/*page3*/
.page3 {
  width: 100vw;
  height: 100vh;
  min-width: 1280px;
  position: relative;
}
.page3 > div {
  width: 100%;
  height: 100%;
  animation-duration: 1s;
}
.page3 > div > div:nth-of-type(1) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/bg.d396b3d3.jpg")
    top/cover no-repeat;
}
.page3 > div:nth-of-type(2) > div:nth-of-type(1) {
  background-image: url("https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/bg.5e50f046.jpg");
}
.page3 > div > div:nth-of-type(2) {
  position: absolute;
  margin-top: 3em;
  top: 50%;
  left: 55%;
  width: 45%;
  height: 1.43em;
  background: rgba(192, 130, 78, 0.1);
}
.page3 > div:nth-of-type(2) > div:nth-of-type(2) {
  background: rgba(115, 175, 230, 0.1);
}
.page3 > div > div:nth-of-type(3) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: 1.5em;
  background: url("https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/ch.93d6da3d.png")
    50% / auto 100% no-repeat;
}
.page3 > div:nth-of-type(2) > div:nth-of-type(3) {
  background-image: url(https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/ch.4b56e9ad.png);
}
.page3 > div > div:nth-of-type(3) > img:nth-of-type(1) {
  position: absolute;
  top: 50%;
  right: 50%;
  margin-right: -5em;
  margin-top: 0.7em;
  width: 2.75em;
}
.page3 > div > div:nth-of-type(3) > img:nth-of-type(2) {
  position: absolute;
  top: 50%;
  right: 50%;
  margin-right: -5em;
  margin-top: 3.2em;
  width: 2.04em;
}
.page3 > div > div:nth-of-type(4) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12em;
  width: 62.5%;
  margin: auto;
  height: 7.91em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.page3 > div > div:nth-of-type(4) > img:nth-of-type(1) {
  width: 3.46em;
}
.page3 > div:nth-of-type(2) > div:nth-of-type(4) > img:nth-of-type(1) {
  width: 2.98em;
}
.page3 > div > div:nth-of-type(4) > div:nth-of-type(1) {
  width: 4.48em;
  height: 2.49em;
  border: 1px solid #fff;
  margin: 0.39em 0 0.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(@/assets/img/image41.png) 50% / cover no-repeat,
    url(https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/cover.2b945caf.jpg)
      50% / cover no-repeat;
}
.page3 > div:nth-of-type(2) > div:nth-of-type(4) > div:nth-of-type(1) {
  background: url(@/assets/img/image41.png) 50% / cover no-repeat,
    url(@/assets/img/page3_black.png) 50% / cover no-repeat;
}
.page3 > div > div:nth-of-type(4) > div:nth-of-type(1) > div {
  width: 0.87em;
  height: 0.87em;
  cursor: pointer;
}
.page3 > div > div:nth-of-type(4) > div:nth-of-type(2) {
  width: 4.42em;
  display: flex;
  justify-content: space-between;
}
.page3 > div > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) {
  width: 2.09em;
  height: 0.56em;
  cursor: pointer;
  background: url(@/assets/img/image42.png) 50% / contain no-repeat;
}
.page3
  > div:nth-of-type(2)
  > div:nth-of-type(4)
  > div:nth-of-type(2)
  > div:nth-of-type(1) {
  background-image: url(@/assets/img/image46.png);
}
.page3 > div > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(2) {
  width: 2.09em;
  height: 0.56em;
  cursor: pointer;
  background: url(@/assets/img/image43.png) 50% / contain no-repeat;
}
.page3
  > div:nth-of-type(2)
  > div:nth-of-type(4)
  > div:nth-of-type(2)
  > div:nth-of-type(2) {
  background-image: url(@/assets/img/image47.png);
}
.page3 > div > div:nth-of-type(4) > img:nth-of-type(2) {
  margin: 0.33em 0 0.25em;
  width: 4.42em;
}
.page3 > div > div:nth-of-type(4) > div:nth-of-type(3) {
  height: 1.27em;
  margin: 0em 0 0.37em;
  display: flex;
}
.page3 > div > div:nth-of-type(4) > div:nth-of-type(3) > span {
  width: 0.98em;
  height: 1.28em;
  border-radius: 0;
  opacity: 1;
  display: block;
  margin: 0 0.29em 0 0;
  outline: 0;
  cursor: pointer;
}
.page3 > div > div:nth-of-type(4) > div:nth-of-type(3) > span:nth-of-type(1) {
  background: url(@/assets/img/image44.png) 50% / contain no-repeat;
}
.page3
  > div:nth-of-type(2)
  > div:nth-of-type(4)
  > div:nth-of-type(3)
  > span:nth-of-type(1) {
  background-image: url(@/assets/img/image44_1.png);
}
.page3 > div > div:nth-of-type(4) > div:nth-of-type(3) > span:nth-of-type(2) {
  background: url(@/assets/img/image45.png) 50% / contain no-repeat;
}
.page3
  > div:nth-of-type(2)
  > div:nth-of-type(4)
  > div:nth-of-type(3)
  > span:nth-of-type(2) {
  background-image: url(@/assets/img/image45_1.png);
}

/*page4*/
.page4 {
  width: 100vw;
  height: 100vh;
  min-width: 1280px;
  position: relative;
  background: url(@/assets/img/bg-cff0f741.png) 50% / cover no-repeat;
}
.page4 > div:nth-of-type(1) {
  width: 2.87em;
  height: 1.65em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -4.82em);
  background: url(@/assets/img/image48.png) 50% / contain no-repeat;
  margin-top: 0.06em;
}
.page4 > div:nth-of-type(2) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 0.6em;
  width: 12.03em;
  height: 6.75em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.page4 > div:nth-of-type(2) > ul:nth-of-type(1) {
  position: relative;
  /* width: 100%; */
  height: 5.81em;
  display: flex;
  flex-wrap: nowrap;
}
.page4 > div:nth-of-type(2) > ul:nth-of-type(1) > li {
  /*flex布局中li标签无法得到实际的宽度？使用flex:0 0 xxxpx方式 阻止元素的自动放大缩小即flex-grow:0和flex-shirnk:0*/
  /* width: 12.03em; */
  display: flex;
  flex: 0 0 12.03em;
  justify-content: space-between;
  position: relative;
}
.page4 > div:nth-of-type(2) > ul:nth-of-type(1) > li > img {
  display: block;
}
.page4 > div:nth-of-type(2) > ul:nth-of-type(1) > li > img:nth-of-type(1) {
  width: 9.78em;
  height: 100%;
}
.page4 > div:nth-of-type(2) > ul:nth-of-type(1) > li > img:nth-of-type(2) {
  width: 2.19em;
  height: 100%;
}
.page4 > div:nth-of-type(2) > ul:nth-of-type(1) > li > img:nth-of-type(3) {
  position: absolute;
  top: 3.29em;
  right: 0.24em;
  width: 1.71em;
  cursor: pointer;
}
.page4 > div:nth-of-type(2) > ul:nth-of-type(2) {
  width: 100%;
  display: flex;
  justify-content: center;
}
.page4 > div:nth-of-type(2) > ul:nth-of-type(2) > li {
  width: 2.04em;
  height: 0.49em;
  margin: 0 0.1em 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page4 > div:nth-of-type(2) > ul:nth-of-type(2) > li > img {
  width: 100%;
  height: 100%;
}
.page4 > div:nth-of-type(2) > ul:nth-of-type(2) > li > img:nth-of-type(1) {
  /* width: 113px; */
  height: 0.257em;
  width: 1.614em;
  transform: scale(0.715);
}
.page4
  > div:nth-of-type(2)
  > ul:nth-of-type(2)
  > li:nth-of-type(1)
  > img:nth-of-type(1) {
  width: 2.428em;
}

/*page5*/
.page5 {
  width: 100vw;
  height: 100vh;
  min-width: 1280px;
  position: relative;
  background: url(https://webstatic.mihoyo.com/ys/event/e20201223-fab/images/bg.ab2a72b3.png)
    50% / cover no-repeat;
}
.page5 > div {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 9em;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.page5 > div > div:nth-of-type(1) {
  width: 1.9em;
  height: 1.65em;
}
.page5 > div > div:nth-of-type(1) > img {
  width: 100%;
  height: 100%;
}
.page5 > div > div:nth-of-type(2) {
  width: 100%;
  position: relative;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(1) {
  position: relative;
  margin: 0 auto;
  width: 11.92em;
  height: 4.67em;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(1) > div {
  position: absolute;
  top: 0;
  transition: all 0.3s;
  width: 8.08em;
  height: 4.67em;
  /* opacity: 0; */
  left: 1.92em;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(1) > div::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(1) > .active1 {
  transform: translateZ(0) scale(1);
  z-index: 3;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(1) > .active1::after {
  opacity: 0;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(1) > .active2 {
  transform: translate3d(2.44em, 0, 0) scale(0.87);
  z-index: 2;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(1) > .active3 {
  transform: translate3d(2.37em, 0, 0) scale(0.74);
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(1) > .active4 {
  transform: translate3d(-2.38em, 0, 0) scale(0.74);
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(1) > .active5 {
  transform: translate3d(-2.44em, 0, 0) scale(0.87);
  z-index: 2;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(1) > div > img {
  width: 100%;
  height: 100%;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(2) {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.44em;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(2) > ul {
  display: flex;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(2) > ul > li {
  width: 0.16em;
  height: 0.16em;
  cursor: pointer;
  background: url(@/assets/img/image53.png) no-repeat;
  background-size: cover;
  margin: 0 0.05em;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(2) > ul > .active {
  background-image: url(@/assets/img/image54.png);
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(3),
.page5 > div > div:nth-of-type(2) > div:nth-of-type(4) {
  position: absolute;
  top: 1.91em;
  width: 0.72em;
  height: 0.93em;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(3) > img,
.page5 > div > div:nth-of-type(2) > div:nth-of-type(4) > img {
  width: 0.47em;
  height: 0.68em;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(3) {
  left: 2.8em;
}
.page5 > div > div:nth-of-type(2) > div:nth-of-type(4) {
  right: 2.8em;
}
.page5 > div > div:nth-of-type(3) {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 1.46em;
  align-items: center;
}
.page5 > div > div:nth-of-type(3) > div {
  width: 1.22em;
  height: 1.46em;
  cursor: pointer;
  margin: 0 0.285em;
  position: relative;
}
.page5 > div > div:nth-of-type(3) > a {
  width: 1.22em;
  height: 1.46em;
  cursor: pointer;
  margin: 0 0.285em;
  position: relative;
}
.page5 > div > div:nth-of-type(3) > a > img:nth-of-type(2) {
  width: 1.3em;
  height: 1.3em;
  position: absolute;
  top: -0.04em;
  left: -0.04em;
}
.page5 > div > div:nth-of-type(3) > div > img:nth-of-type(2) {
  width: 1.3em;
  height: 1.3em;
  position: absolute;
  top: -0.04em;
  left: -0.04em;
}
.page5 > div > div:nth-of-type(3) img {
  width: 100%;
  height: 100%;
}
</style>