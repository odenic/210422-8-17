<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="isShow = false">
      <h2 class="all" @mouseenter="isShow = true">全部商品分类</h2>
      <nav class="nav" @mouseenter="isShow = false">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort" v-show="$route.path === '/' || isShow">
        <div class="all-sort-list2" @click="toSearch">
          <div class="item" v-for="item in CategoryList" :key="item.categoryId">
            <h3>
              <a
                href=""
                :data-name="item.categoryName"
                :data-id="item.categoryId"
                :data-level="1"
                >{{ item.categoryName }}</a
              >
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl
                  class="fore"
                  v-for="item2 in item.categoryChild"
                  :key="item2.categoryId"
                >
                  <dt>
                    <a
                      href=""
                      :data-name="item2.categoryName"
                      :data-id="item2.categoryId"
                      :data-level="2"
                      >{{ item2.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <em
                      v-for="item3 in item2.categoryChild"
                      :key="item3.categoryId"
                      :data-name="item3.categoryName"
                      :data-id="item3.categoryId"
                      :data-level="3"
                    >
                      {{ item3.categoryName }}
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, VueElement } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "TypeNav",
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    this.getList();
  },
  computed: {
    ...mapState("home", ["CategoryList"]),
  },
  methods: {
    ...mapActions("home", ["getList"]),
    toSearch(e: Event): void {
      const tar = e.target as VueElement;
      const { id, name, level } = tar.dataset;
      if (!id) return;
      let data = {
        name: "Search",
        query: {
          categoryName: name,
          [`category${level}Id`]: id,
        },
        params:this.$route.params
      }
      this.$router.push(data);
    },
  },

  // setup() {

  // },
});
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
        text-decoration: none;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          transition: 1s;
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            // padding: 0 20px;
            margin: 0;

            a {
              display: block;
              padding: 0 20px;
              color: #333;
              text-decoration: none;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            background-color: skyblue;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>

