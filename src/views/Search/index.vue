<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li v-show="option.categoryName" class="with-x">
              {{ option.categoryName }} <i @click="removeCategoryName">×</i>
            </li>
            <li v-show="option.keyword" class="with-x">
              {{ option.keyword }}<i @click="removeKeyword">×</i>
            </li>
            <li v-show="option.trademark" class="with-x">
              {{ option.trademark.split(":")[1]
              }}<i @click="removeTrademark">×</i>
            </li>
            <li
              v-for="(item, index) in option.props"
              :key="index"
              class="with-x"
            >
              {{ `${item.split(":")[2]}:${item.split(":")[1]}`
              }}<i @click="removeProps(index)">×</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector
          v-if="isShow"
          :list="res"
          :trademarkSearch="trademarkSearch"
          :propsSearch="propsSearch"
        />

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li
                  @click="setOrder('1')"
                  :class="getNumOfOrder === '1' ? 'active' : ''"
                >
                  <a
                    >综合
                    <svg
                      class="icon"
                      aria-hidden="true"
                      v-show="getNumOfOrder === '1'"
                    >
                      <use
                        :xlink:href="
                          sortOrder === 'desc'
                            ? '#icon-a-arrow-down1x'
                            : '#icon-a-arrow-up1x'
                        "
                      ></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li
                  @click="setOrder('2')"
                  :class="getNumOfOrder === '2' ? 'active' : ''"
                >
                  <a
                    >价格
                    <svg
                      class="icon"
                      aria-hidden="true"
                      v-show="getNumOfOrder === '2'"
                    >
                      <use
                        :xlink:href="
                          sortOrder === 'desc'
                            ? '#icon-a-arrow-down1x'
                            : '#icon-a-arrow-up1x'
                        "
                      ></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li
                class="yui3-u-1-5"
                v-for="(item, index) in res.goodsList"
                :key="index"
                @click="goDetail(item.id)"
              >
                <div class="list-wrap">
                  <div class="p-img">
                    <a target="_blank"><img :src="item.defaultImg"/></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ item.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >{{ item.title }}</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <Pagination
            v-if="res.pageNo"
            :pageNo="res.pageNo"
            :pageSize="res.pageSize"
            :total="res.total"
            :totalPages="res.totalPages"
            :changePage="changePage"
            :changePerPage="changePerPage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchSelector from "./SearchSelector/SearchSelector.vue";
import { search } from "@/api/search";
import { SearchData, ResOfSearch } from "@/types/index";
import Pagination from "@/components/Pagination/index.vue";
export default defineComponent({
  name: "Search",
  data(): SearchData {
    return {
      sortOrder: "desc",
      isShow: false,
      res: {},
      option: {
        category1Id: (this.$route.query.category1Id as string) || "",
        category2Id: (this.$route.query.category2Id as string) || "",
        category3Id: (this.$route.query.category3Id as string) || "",
        categoryName: (this.$route.query.categoryName as string) || "",
        keyword: (this.$route.params.keyword as string) || "",
        props: [],
        trademark: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 5,
      },
    };
  },
  mounted() {
    this.reqSearch();
  },
  components: {
    SearchSelector,
    Pagination,
  },
  methods: {
    async reqSearch(): Promise<void> {
      try {
        const res = (await search(this.option)) as ResOfSearch;
        this.isShow = true;
        this.res = res;
      } catch (error) {
        console.log(error);
      }
    },
    trademarkSearch(data: string): void {
      this.option.trademark = data ? data : "";
      this.option.pageNo = 1;
    },
    propsSearch(data: string): void {
      if (this.option.props) {
        if (this.option.props.indexOf(data) === -1) {
          this.option.props.push(data);
          this.option.pageNo = 1;
        }
      }
    },
    removeCategoryName(): void {
      this.$route.query.categoryName = "";
      this.$route.query.category1Id = "";
      this.$route.query.category2Id = "";
      this.$route.query.category3Id = "";
      this.$router.push({
        name: "Search",
        params: {
          keyword: this.option.keyword,
          // pageNo: 1,
        },
      });
    },
    removeKeyword(): void {
      this.$route.params.keyword = "";
      this.$router.push({
        name: "Search",
        query: {
          ...this.$route.query,
          //  pageNo: 1
        },
      });
    },
    removeTrademark(): void {
      this.option.trademark = "";
      this.option.pageNo = 1;
    },
    removeProps(index: number): void {
      this.option.props?.splice(index, 1);
      this.option.pageNo = 1;
    },
    setOrder(order: string): void {
      let [a, b] = this.option.order.split(":");
      if (a === order) {
        this.sortOrder = b === "desc" ? "asc" : "desc";
      } else {
        a = order;
        this.sortOrder = "desc";
      }
      this.option.order = `${a}:${this.sortOrder}`;
    },
    changePage(pageNumber: number): void {
      if (pageNumber === 0) return;
      this.option.pageNo = pageNumber;
    },
    changePerPage(perPage: number): void {
      if (this.option.pageSize !== perPage) {
        this.option.pageNo = 1;
        this.option.pageSize = perPage;
      }
    },
    goDetail(skuId: number): void {
      this.$router.push({
        name: "Detail",
        query: {
          skuId,
        },
      });
    },
  },
  watch: {
    $route: {
      handler: function(n): void {
        this.option.keyword = n.params.keyword;
        this.option.category1Id = n.query.category1Id || "";
        this.option.category2Id = n.query.category2Id || "";
        this.option.category3Id = n.query.category3Id || "";
        this.option.categoryName = n.query.categoryName;
      },
      deep: true,
    },
    option: {
      handler: function(): void {
        this.reqSearch();
      },
      deep: true,
    },
  },
  computed: {
    getNumOfOrder(): string {
      return this.option.order.split(":")[0];
    },
  },
});
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
                transition: 1s;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: 5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  transition: 1s;
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  transition: 1s;
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>
