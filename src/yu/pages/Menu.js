import '../styles/members-menu.scss'
import {
  FaAddressCard,
  FaEdit,
  FaBookOpen,
  FaCartPlus,
  FaBolt,
  FaChild,
} from 'react-icons/fa'
import { Tabs, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb yu-menu-breadcrumb">
          <li class="breadcrumb-honki">
            <Link to="/">首頁</Link>
          </li>
          <li class="active" aria-current="page">
            會員中心
          </li>
        </ol>
      </nav>
      {/* <!-- 紅圓點 --> */}
      <div class="yu-menu-redpoint"></div>

      {/* <!-- 標題欄 --> */}
      <div className="container my-5">
        <div className="row d-flex">
          {/* <!-- 標題 --> */}
          <div class="yu-menu-member-menu">
            <h5>會員總表</h5>
          </div>
          <div class="yu-menu-member-photo">
            {/* <!-- 個人頭貼 --> */}
            <img
              src="http://localhost:3000/images/yu/personalphoto.svg"
              alt=""
            />
          </div>
          <div>
            {/* <!-- 會員等級 --> */}
            <div class="yu-menu-general-member">一般會員</div>
            {/* <!-- 歡迎詞 --> */}
            <div class="yu-menu-greeting">哈囉，歡迎回來</div>
          </div>
        </div>
      </div>

      {/* <!-- 會員總表收合選單 --> */}
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="holder d-none d-lg-block mx-auto yu-menu-panels">
            <Tabs defaultActiveKey="yu-menu-1" id="uncontrolled-tab-example">
              <Tab eventKey="yu-menu-1" title="會員總表">
                <div class="yu-menu-col-2">
                  {/* <!-- 我的帳戶 --> */}
                  <div>
                    <div class="d-flex justify-content-center yu-menu-account-1 ">
                      <div class="d-flex justify-content-center yu-menu-account-1-1">
                        <FaAddressCard className="far fa-address-card yu-menu-card" />
                        <p class="yu-menu-account-1-1-1">我的帳戶</p>
                      </div>
                    </div>
                    <div>
                      <ul class="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">個人資料修改</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">修改密碼</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">修改節氣頭貼</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">刪除帳號</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">節氣書櫃</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 我的收藏 --> */}
                  <div>
                    <div class="d-flex justify-content-center yu-menu-account-1 ">
                      <div class="d-flex justify-content-center yu-menu-account-1-1">
                        <FaEdit className="fas fa-edit yu-menu-card" />
                        <p class="yu-menu-account-1-1-1">我的收藏</p>
                      </div>
                    </div>
                    <div>
                      <ul class="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 二手交換 --> */}
                  <div>
                    <div class="d-flex justify-content-center yu-menu-account-1 ">
                      <div class="d-flex justify-content-center yu-menu-account-1-1">
                        <FaBookOpen className="fas fa-book-open yu-menu-card" />
                        <p class="yu-menu-account-1-1-1">二手交換</p>
                      </div>
                    </div>
                    <div>
                      <ul class="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 購物紀錄 --> */}
                  <div>
                    <div class="d-flex justify-content-center yu-menu-account-1 ">
                      <div class="d-flex justify-content-center yu-menu-account-1-1">
                        <FaCartPlus className="fas fa-cart-plus yu-menu-card" />
                        <p class="yu-menu-account-1-1-1">購物紀錄</p>
                      </div>
                    </div>
                    <div>
                      <ul class="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 專屬優惠 --> */}
                  <div>
                    <div class="d-flex justify-content-center yu-menu-account-1 ">
                      <div class="d-flex justify-content-center yu-menu-account-1-1">
                        <FaBolt className="fas fa-bolt yu-menu-card" />
                        <p class="yu-menu-account-1-1-1">專屬優惠</p>
                      </div>
                    </div>
                    <div>
                      <ul class="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- 參與活動 --> */}
                  <div>
                    <div class="d-flex justify-content-center yu-menu-account-1 ">
                      <div class="d-flex justify-content-center yu-menu-account-1-1">
                        <FaChild className="fas fa-child yu-menu-card" />
                        <p class="yu-menu-account-1-1-1">參與活動</p>
                      </div>
                    </div>
                    <div>
                      <ul class="yu-menu-account-2">
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <div className="yu-menu-links">XXX</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="yu-menu-2" title="購物紀錄">
                <div class="panel-title">購物紀錄</div>
                <p>
                  特色三、日本歷史專業團隊 ╳ 日語專業團隊，打造日語中高級閱讀力
                  融入N3~N1字彙及句型，藉由閱讀故事、聆聽音檔，培養中高級文章理解力、奠定日語表現根基。
                  「Nippon所藏」系列介紹： 專為中高級（N3~N1）日語學習者打造，EZ
                  Japan日語嚴選講座。 閱讀日本，或語言，或文化，或古典，或時尚。
                  用一雙眼，追逐日本的瞬息萬變、領略日本的傳承與創新。
                  「Nippon所藏」為你獻上日本的薈萃珍藏。
                </p>
              </Tab>
              <Tab eventKey="yu-menu-3" title="我的收藏">
                <div class="panel-title">我的收藏</div>
                <p>
                  特色三、日本歷史專業團隊 ╳ 日語專業團隊，打造日語中高級閱讀力
                  融入N3~N1字彙及句型，藉由閱讀故事、聆聽音檔，培養中高級文章理解力、奠定日語表現根基。
                  「Nippon所藏」系列介紹： 專為中高級（N3~N1）日語學習者打造，EZ
                  Japan日語嚴選講座。 閱讀日本，或語言，或文化，或古典，或時尚。
                  用一雙眼，追逐日本的瞬息萬變、領略日本的傳承與創新。
                  「Nippon所藏」為你獻上日本的薈萃珍藏。
                </p>
              </Tab>
              <Tab eventKey="yu-menu-4" title="專屬優惠">
                <div class="panel-title">專屬優惠</div>
                <p>
                  用一雙眼，追逐日本的瞬息萬變、領略日本的傳承與創新。
                  「Nippon所藏」為你獻上日本的薈萃珍藏。
                </p>
              </Tab>
              <Tab eventKey="yu-menu-5" title="二手交換">
                <div class="panel-title">二手交換</div>
                <p>
                  林潔珏、游翔皓、EZ Japan編輯部 游翔皓
                  <br />
                  日本關西學院大學日本語教育碩士。目前主要任教於文化大學推廣教育部，教授日文。內容有「初˙中級日本語」、「日語能力檢定試驗」、「日語中上級讀解」、「日本歷史」等課程。合著有『經典日劇100話：Nippon所藏8』、『日本歷史名人：Nippon所藏12』，並翻譯許多日語學習及考試用書。
                  著有《這個動作、那個情境、日語怎麼說？桃太郎的實用動詞組句，教你日語好到花瘋(附音檔)》同時也是人氣粉專「桃太郎的花瘋日文」版主。
                </p>
              </Tab>
              <Tab eventKey="yu-menu-6" title="參與活動">
                <div class="panel-title">參與活動</div>
                <p>
                  Part1. 卷頭特輯：有故事的庶民美食 ……壹、鄉土料理二三事　
                  <br />
                  ……◎之一：「鄉土料理百選」 　　
                  <br />
                  ……◎之二：旅人踏入當地的第一味──車站便當
                  <br />
                  ……◎之三：因関東大震災而生的生存料理――鍋飯
                  <br />
                  ……◎之四：日本國民的兒食記憶──營養午餐 　　　
                  <br />
                  ……＜豆知識＞咖哩飯的好朋友──「福神漬」、「辣韮」、「紅生薑」
                </p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
