import '../styles/product.scss'
import {
  FaHeart,
  FaShoppingCart,
  FaShare,
  FaStar,
  FaBookOpen,
} from 'react-icons/fa'
import MultiLevelBreadCrumb from '../../../components/MultiLevelBreadCrumb'
import { withRouter } from 'react-router-dom'
import { Tabs, Tab, Accordion, Card, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import React from 'react'
import MyVerticallyCenteredModal from '../../../components/MyVerticallyCenteredModal'

function ProductDetail(props) {
  const [modalShow, setModalShow] = React.useState(false)
  const [productDetail, setProductDetail] = useState([])
  console.log(props.match.params.sid)
  const sid = props.match.params.sid
  const getProductDetail = async () => {
    const response = await fetch('http://localhost:3333/product/' + sid, {
      method: 'get',
    })
    const data = await response.json()
    console.log(data)
    // setProductDetail(data)
  }
  // didMount 伺服器抓資料
  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <>
      <div className="container-fluid wei-bg-white">
        <div className="row position-relative">
          <div className="wei-detail-icons d-flex flex-column">
            <button className="wei-detail-icon wei-detail-heart mb-2">
              <FaHeart className="wei-detail-heart-icon" />
            </button>
            <button className="wei-detail-icon wei-detail-share">
              <FaShare className="wei-detail-share-icon" />
            </button>
          </div>
          <div className="col-12">
            <MultiLevelBreadCrumb class="breadcrumb wei-breadcrumb" />
          </div>
          <div className="col-12 col-md-5 wei-detail-left text-center mt-5">
            <div className="wei-detail-pic mx-auto mb-5">
              <img
                className="w-100"
                src="/images/books/5fe30a4524730.png"
                alt=""
              />
            </div>
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
              className="btn-md-dark wei-read-trial"
            >
              <FaBookOpen className="mr-3" />
              試閱
            </Button>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div className="col-12 col-md-7 wei-detail-right pt-5">
            <h4 className="wei-detail-title">日本庶民美食</h4>
            <h5 className="wei-detail-subtitle">
              Nippon所藏日語嚴選講座 (附MP3)
            </h5>
            <hr className="wei-line" />
            <span className="wei-stars">
              <FaStar className="mr-1 wei-star" />
              <FaStar className="mr-1 wei-star" />
              <FaStar className="mr-1 wei-star" />
              <FaStar className="mr-1 wei-star" />
              <FaStar className="mr-3 wei-star" />
            </span>
            <span className="wei-reviews">95 Reviews</span>
            <h6 className="wei-detail-author mt-3">
              作者： 林潔珏/ 游翔皓/ EZ Japan編輯部
            </h6>
            <h6 className="wei-detail-publication">出版社：EZ叢書館</h6>
            <h6 className="wei-detail-pub-year">出版年份：2020</h6>
            <h6 className="wei-detail-language">語言：繁體中文</h6>
            <h6 className="wei-detail-isbn">ISBN：9789862489277</h6>
            <div className="wei-detail-pricearea d-flex my-4">
              <h5 className="wei-detail-final-price">NT$ 316</h5>
              <div className="wei-detail-badge mx-4">79折</div>
              <h6 className="wei-detail-price">
                <del>NT $400</del>
              </h6>
            </div>
            <button className="btn-lg wei-add-to-cart">
              <FaShoppingCart className="mr-5" />
              放入購物車
            </button>
          </div>
        </div>
        <div className="row">
          <div className="holder d-none d-lg-block mx-auto wei-holder">
            <Tabs defaultActiveKey="bookOverview" id="uncontrolled-tab-example">
              <Tab eventKey="bookOverview" title="內容簡介">
                <div class="panel-title">內容簡介</div>
                <p>
                  《日本庶民美食：Nippon所藏日語嚴選講座》
                  <br />
                  越後蕎麥麵，為何添了紡織業用的黏著劑？
                  <br />
                  島根埋飯，為何非得把料藏碗底不可？
                  <br />
                  岩手核桃丸子湯，為何把核桃包進麵皮裏煮湯？
                  <br />
                  簡單一道料理，道盡日本市井小民的不簡單。 【本書特色】
                  <br />
                  特色一、剖析日本三大美饌聖地食文化，瞭解歷史淵源
                  <br />
                  針對日本網路票選出美食最具魅力的前三名：大阪府、北海道、長崎縣，卷頭特輯帶您瞭解這些地區在食文化上的歷史發展、食物特色，介紹當地不容錯過的行家美味、與職人對於自家產品的堅持。
                  <br />
                  特色二、47道都府縣的自豪美味
                  臭得媲美臭豆腐的滋賀鲋壽司、湯頭黑不見底的富山黑拉麵、粉紅甜滋滋的伊勢崎文字燒……由這些充滿個性的鄉土料理或B級美食中，能一窺當地人習性。本書有別於一般旅遊美食導引，不追當紅店家，而是精選各縣最具地域性、對台灣人而言相對陌生的一道，解說食材與料理法的特殊性，並介紹料理源起及道地吃法。用眼睛享受美食的同時，能更深入認識日本各地不同的風土物產與生活樣貌。
                  <br />
                  特色三、日本歷史專業團隊 ╳ 日語專業團隊，打造日語中高級閱讀力
                  融入N3~N1字彙及句型，藉由閱讀故事、聆聽音檔，培養中高級文章理解力、奠定日語表現根基。
                  「Nippon所藏」系列介紹： 專為中高級（N3~N1）日語學習者打造，EZ
                  Japan日語嚴選講座。 閱讀日本，或語言，或文化，或古典，或時尚。
                  用一雙眼，追逐日本的瞬息萬變、領略日本的傳承與創新。
                  「Nippon所藏」為你獻上日本的薈萃珍藏。
                </p>
              </Tab>
              <Tab eventKey="authorIntro" title="作者介紹">
                <div class="panel-title">作者介紹</div>
                <p>
                  林潔珏、游翔皓、EZ Japan編輯部 游翔皓
                  <br />
                  日本關西學院大學日本語教育碩士。目前主要任教於文化大學推廣教育部，教授日文。內容有「初˙中級日本語」、「日語能力檢定試驗」、「日語中上級讀解」、「日本歷史」等課程。合著有『經典日劇100話：Nippon所藏8』、『日本歷史名人：Nippon所藏12』，並翻譯許多日語學習及考試用書。
                  <br />
                  <br />
                  林潔珏 東吳大學日文系畢業。
                  <br />
                  長住日本，曾任EZ
                  Japan流行日語會話誌專欄執筆，現在是專業翻譯、口譯員。
                  <br />
                  擁有烹飪、園藝、旅遊、攝影、遍嚐美酒美食等廣泛興趣和追根究底的衝勁。身為日文系的畢業生，最希望的是對台灣和日本文化的交流能盡一己之力，與大家分享在日本20幾年來的心得與體驗。
                  <br />
                  EZ Japan編輯部
                  一群哈日又知日、沈浸於文字樂趣的編輯們持續求新求變，開拓日本閱讀新視野
                  EZ Japan沒有極限！
                  <br />
                  <br />
                  冨永圭太
                  <br />
                  神戶市外國語大學英文系畢業，曾於Y's
                  media（日本新聞媒體公司）、台北市觀光局、碧詠國際翻譯社、統一翻譯社擔任筆譯。
                  <br />
                  著有《這個動作、那個情境、日語怎麼說？桃太郎的實用動詞組句，教你日語好到花瘋(附音檔)》同時也是人氣粉專「桃太郎的花瘋日文」版主。
                </p>
              </Tab>
              <Tab eventKey="bookList" title="書籍目錄">
                <div class="panel-title">書籍目錄</div>
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
                  <br />
                  ……貳、B級美食最夯的道都府縣大搜查 ……◎ No1.大阪府
                  <br />
                  ……【食文化】「粉物」控？！ ……【必買】551蓬萊肉包與創始者羅邦強
                  <br />
                  ……【必吃】文豪靈感泉源：「自由軒」＆「夫婦善哉」
                  <br />
                  ……◎ No2.
                  <br />
                  北海道
                  <br />
                  ……【食文化】「道產」庶民料理
                  <br />
                  ……【必吃】雪國拉麵：旭川拉麵VS札幌拉麵
                  <br />
                  ……【必逛】札幌人的廚房：超過百年歷史的二条市場 ……◎ No3. 長崎県
                  <br />
                  ……【食文化】和華蘭文化蘊育出的異色之作
                  <br />
                  ……【必吃】日本咖哩發祥地？砂糖╳辛香料的完美合奏：大村市黑咖哩
                  <br />
                  ……【必買】長崎蛋糕原來不是蜂蜜蛋糕？創始號「福砂屋」 　　　
                  <br />
                  ……＜豆知識＞「カステラ」vs「海援隊カステラ」 Part2.
                  <br />
                  全國庶民美食味自慢 ……壹、北海道與東北地方
                  ……北海道鄂霍次克北見塩味炒麵 ……青森縣煎餅湯 ……秋田縣烤米棒鍋
                  <br />
                  ……岩手縣核桃丸子湯 ……山形縣魚雜湯 ……宮城縣油麩丼
                  <br />
                  ……福島縣喜多方拉麵 ……貳、關東地方 ……東京都深川丼
                  <br />
                  ……埼玉縣味噌炸馬鈴薯 ……神奈川縣魩仔魚丼 ……千葉縣山家燒
                  <br />
                  ……茨城縣精力拉麵 ……栃木縣宇都宮餃子 　 ……群馬縣伊勢崎文字燒
                  <br />
                  ……参、中部地方 ……愛知縣味噌烏龍麵 　……岐阜縣雞肉味噌蒜味燒
                  <br />
                  ……靜岡縣蓬蓬雞蛋煮 ……山梨縣雞內臟煮 ……長野縣羊肉炒麵
                  <br />
                  ……富山縣黑拉麵 ……石川縣TKGY ……福井縣越前蘿蔔泥蕎麥麵
                  <br />
                  ……新潟縣越後蕎麥麵 ……肆、近畿地方 ……大阪府炸串燒
                  <br />
                  ……京都府一銭洋食 ……兵庫縣炒麵飯 ……奈良縣竜田揚
                  <br />
                  ……和歌山縣鯨魚竜田揚 　 ……滋賀縣鮒寿司 ……三重縣隨手捏散壽司
                  <br />
                  ……＜花絮＞打倒可樂！道產子「Guarana」讓飲料界天王可口可樂碰釘子？
                  <br />
                  ……＜花絮＞大阪燒，廣島燒。どっち？ ……伍、中國地方
                  <br />
                  ……廣島乾拌擔擔麵 ……岡山縣ママカリ寿司 ……鳥取縣蟹肉山藥丼
                  <br />
                  ……島根縣埋飯 ……山口縣瓦片蕎麥麵 ……陸、四國地方
                  <br />
                  ……香川縣帶骨烤雞腿 ……愛媛縣燒豚玉子飯 ……德島縣豆天玉好吃燒
                  <br />
                  ……高知縣鍋燒拉麵 ……柒、九州與沖繩地方 ……福岡縣雞肉鍋
                  <br />
                  ……長崎縣土耳其飯 ……熊本縣速成麻糬 ……宮崎縣肉捲飯糰
                  <br />
                  ……大分縣別府冷麵 ……佐賀縣西西里飯 ……鹿兒島縣雞飯
                  <br />
                  ……沖繩縣山苦瓜炒 ……＜花絮＞沖繩美食會錯意篇 Part.3
                  美食東西擂台
                  <br />
                  ……蒲燒鰻對決──講究功夫的関東vs. 講究技巧的関西
                  <br />
                  ……餃子對決──菜餡爽口的宇都宮vs. 肉汁鮮美的浜松
                </p>
              </Tab>
            </Tabs>
          </div>
          <div className="holder-mobile d-lg-none wei-holder-mobile">
            <Accordion defaultActiveKey="10">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="10">
                    內容簡介
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    <p>
                      《日本庶民美食：Nippon所藏日語嚴選講座》
                      <br />
                      越後蕎麥麵，為何添了紡織業用的黏著劑？
                      <br />
                      島根埋飯，為何非得把料藏碗底不可？
                      <br />
                      岩手核桃丸子湯，為何把核桃包進麵皮裏煮湯？
                      <br />
                      簡單一道料理，道盡日本市井小民的不簡單。 【本書特色】
                      <br />
                      特色一、剖析日本三大美饌聖地食文化，瞭解歷史淵源
                      <br />
                      針對日本網路票選出美食最具魅力的前三名：大阪府、北海道、長崎縣，卷頭特輯帶您瞭解這些地區在食文化上的歷史發展、食物特色，介紹當地不容錯過的行家美味、與職人對於自家產品的堅持。
                      <br />
                      特色二、47道都府縣的自豪美味
                      臭得媲美臭豆腐的滋賀鲋壽司、湯頭黑不見底的富山黑拉麵、粉紅甜滋滋的伊勢崎文字燒……由這些充滿個性的鄉土料理或B級美食中，能一窺當地人習性。本書有別於一般旅遊美食導引，不追當紅店家，而是精選各縣最具地域性、對台灣人而言相對陌生的一道，解說食材與料理法的特殊性，並介紹料理源起及道地吃法。用眼睛享受美食的同時，能更深入認識日本各地不同的風土物產與生活樣貌。
                      <br />
                      特色三、日本歷史專業團隊 ╳
                      日語專業團隊，打造日語中高級閱讀力
                      融入N3~N1字彙及句型，藉由閱讀故事、聆聽音檔，培養中高級文章理解力、奠定日語表現根基。
                      「Nippon所藏」系列介紹：
                      專為中高級（N3~N1）日語學習者打造，EZ Japan日語嚴選講座。
                      閱讀日本，或語言，或文化，或古典，或時尚。
                      用一雙眼，追逐日本的瞬息萬變、領略日本的傳承與創新。
                      「Nippon所藏」為你獻上日本的薈萃珍藏。
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="11">
                    作者介紹
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="11">
                  <Card.Body>
                    {' '}
                    <p>
                      林潔珏、游翔皓、EZ Japan編輯部 游翔皓
                      <br />
                      日本關西學院大學日本語教育碩士。目前主要任教於文化大學推廣教育部，教授日文。內容有「初˙中級日本語」、「日語能力檢定試驗」、「日語中上級讀解」、「日本歷史」等課程。合著有『經典日劇100話：Nippon所藏8』、『日本歷史名人：Nippon所藏12』，並翻譯許多日語學習及考試用書。
                      <br />
                      <br />
                      林潔珏 東吳大學日文系畢業。
                      <br />
                      長住日本，曾任EZ
                      Japan流行日語會話誌專欄執筆，現在是專業翻譯、口譯員。
                      <br />
                      擁有烹飪、園藝、旅遊、攝影、遍嚐美酒美食等廣泛興趣和追根究底的衝勁。身為日文系的畢業生，最希望的是對台灣和日本文化的交流能盡一己之力，與大家分享在日本20幾年來的心得與體驗。
                      <br />
                      EZ Japan編輯部
                      一群哈日又知日、沈浸於文字樂趣的編輯們持續求新求變，開拓日本閱讀新視野
                      EZ Japan沒有極限！
                      <br />
                      <br />
                      冨永圭太
                      <br />
                      神戶市外國語大學英文系畢業，曾於Y's
                      media（日本新聞媒體公司）、台北市觀光局、碧詠國際翻譯社、統一翻譯社擔任筆譯。
                      <br />
                      著有《這個動作、那個情境、日語怎麼說？桃太郎的實用動詞組句，教你日語好到花瘋(附音檔)》同時也是人氣粉專「桃太郎的花瘋日文」版主。
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="12">
                    書籍目錄
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="12">
                  <Card.Body>
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
                      <br />
                      ……貳、B級美食最夯的道都府縣大搜查 ……◎ No1.大阪府
                      <br />
                      ……【食文化】「粉物」控？！
                      ……【必買】551蓬萊肉包與創始者羅邦強
                      <br />
                      ……【必吃】文豪靈感泉源：「自由軒」＆「夫婦善哉」
                      <br />
                      ……◎ No2.
                      <br />
                      北海道
                      <br />
                      ……【食文化】「道產」庶民料理
                      <br />
                      ……【必吃】雪國拉麵：旭川拉麵VS札幌拉麵
                      <br />
                      ……【必逛】札幌人的廚房：超過百年歷史的二条市場 ……◎ No3.
                      長崎県
                      <br />
                      ……【食文化】和華蘭文化蘊育出的異色之作
                      <br />
                      ……【必吃】日本咖哩發祥地？砂糖╳辛香料的完美合奏：大村市黑咖哩
                      <br />
                      ……【必買】長崎蛋糕原來不是蜂蜜蛋糕？創始號「福砂屋」
                      　　　
                      <br />
                      ……＜豆知識＞「カステラ」vs「海援隊カステラ」 Part2.
                      <br />
                      全國庶民美食味自慢 ……壹、北海道與東北地方
                      ……北海道鄂霍次克北見塩味炒麵 ……青森縣煎餅湯
                      ……秋田縣烤米棒鍋
                      <br />
                      ……岩手縣核桃丸子湯 ……山形縣魚雜湯 ……宮城縣油麩丼
                      <br />
                      ……福島縣喜多方拉麵 ……貳、關東地方 ……東京都深川丼
                      <br />
                      ……埼玉縣味噌炸馬鈴薯 ……神奈川縣魩仔魚丼 ……千葉縣山家燒
                      <br />
                      ……茨城縣精力拉麵 ……栃木縣宇都宮餃子 　
                      ……群馬縣伊勢崎文字燒
                      <br />
                      ……参、中部地方 ……愛知縣味噌烏龍麵 　……岐阜縣雞肉味噌蒜味燒
                      <br />
                      ……靜岡縣蓬蓬雞蛋煮 ……山梨縣雞內臟煮 ……長野縣羊肉炒麵
                      <br />
                      ……富山縣黑拉麵 ……石川縣TKGY ……福井縣越前蘿蔔泥蕎麥麵
                      <br />
                      ……新潟縣越後蕎麥麵 ……肆、近畿地方 ……大阪府炸串燒
                      <br />
                      ……京都府一銭洋食 ……兵庫縣炒麵飯 ……奈良縣竜田揚
                      <br />
                      ……和歌山縣鯨魚竜田揚 　 ……滋賀縣鮒寿司
                      ……三重縣隨手捏散壽司
                      <br />
                      ……＜花絮＞打倒可樂！道產子「Guarana」讓飲料界天王可口可樂碰釘子？
                      <br />
                      ……＜花絮＞大阪燒，廣島燒。どっち？ ……伍、中國地方
                      <br />
                      ……廣島乾拌擔擔麵 ……岡山縣ママカリ寿司 ……鳥取縣蟹肉山藥丼
                      <br />
                      ……島根縣埋飯 ……山口縣瓦片蕎麥麵 ……陸、四國地方
                      <br />
                      ……香川縣帶骨烤雞腿 ……愛媛縣燒豚玉子飯 ……德島縣豆天玉好吃燒
                      <br />
                      ……高知縣鍋燒拉麵 ……柒、九州與沖繩地方 ……福岡縣雞肉鍋
                      <br />
                      ……長崎縣土耳其飯 ……熊本縣速成麻糬 ……宮崎縣肉捲飯糰
                      <br />
                      ……大分縣別府冷麵 ……佐賀縣西西里飯 ……鹿兒島縣雞飯
                      <br />
                      ……沖繩縣山苦瓜炒 ……＜花絮＞沖繩美食會錯意篇 Part.3
                      美食東西擂台
                      <br />
                      ……蒲燒鰻對決──講究功夫的関東vs. 講究技巧的関西
                      <br />
                      ……餃子對決──菜餡爽口的宇都宮vs. 肉汁鮮美的浜松
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="container-fluid wei-detail-books">
        <h5 className="wei-detail-books-subtitle">你可能也會喜歡</h5>
        <div className="row justify-content-center">
          <div className="col-5 col-md-4 col-lg-2 wei-card">
            <div className="wei-card-icon">NEW</div>
            <div className="wei-card-pic position-relative">
              <div className="wei-book-pic">
                <img
                  className="w-100"
                  src="/images/books/5ffd7ab5a282a.jpg"
                  alt=""
                />
              </div>
              <div className="wei-heart-bg">
                <FaHeart className="wei-heart" />
              </div>
            </div>
            <div className="wei-book-text">
              <p className="wei-book-title">
                婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
              </p>
              <p className="wei-book-author">約翰．伯格</p>
              <div className="wei-book-price">$300</div>
            </div>
          </div>
          <div className="col-5 col-md-4 col-lg-2 wei-card">
            <div className="wei-card-icon">NEW</div>
            <div className="wei-card-pic position-relative">
              <div className="wei-book-pic">
                <img
                  className="w-100"
                  src="/images/books/5ffd7ab5a282a.jpg"
                  alt=""
                />
              </div>
              <div className="wei-heart-bg">
                <FaHeart className="wei-heart" />
              </div>
            </div>
            <div className="wei-book-text">
              <p className="wei-book-title">
                婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
              </p>
              <p className="wei-book-author">約翰．伯格</p>
              <div className="wei-book-price">$300</div>
            </div>
          </div>
          <div className="col-5 col-md-4 col-lg-2 wei-card">
            <div className="wei-card-icon">NEW</div>
            <div className="wei-card-pic position-relative">
              <div className="wei-book-pic">
                <img
                  className="w-100"
                  src="/images/books/5ffd7ab5a282a.jpg"
                  alt=""
                />
              </div>
              <div className="wei-heart-bg">
                <FaHeart className="wei-heart" />
              </div>
            </div>
            <div className="wei-book-text">
              <p className="wei-book-title">
                婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
              </p>
              <p className="wei-book-author">約翰．伯格</p>
              <div className="wei-book-price">$300</div>
            </div>
          </div>
          <div className="col-5 col-md-4 col-lg-2 wei-card">
            <div className="wei-card-icon">NEW</div>
            <div className="wei-card-pic position-relative">
              <div className="wei-book-pic">
                <img
                  className="w-100"
                  src="/images/books/5ffd7ab5a282a.jpg"
                  alt=""
                />
              </div>
              <div className="wei-heart-bg">
                <FaHeart className="wei-heart" />
              </div>
            </div>
            <div className="wei-book-text">
              <p className="wei-book-title">
                婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
              </p>
              <p className="wei-book-author">約翰．伯格</p>
              <div className="wei-book-price">$300</div>
            </div>
          </div>
          <div className="col-5 col-md-4 col-lg-2 wei-card">
            <div className="wei-card-icon">NEW</div>
            <div className="wei-card-pic position-relative">
              <div className="wei-book-pic">
                <img
                  className="w-100"
                  src="/images/books/5ffd7ab5a282a.jpg"
                  alt=""
                />
              </div>
              <div className="wei-heart-bg">
                <FaHeart className="wei-heart" />
              </div>
            </div>
            <div className="wei-book-text">
              <p className="wei-book-title">
                婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
              </p>
              <p className="wei-book-author">約翰．伯格</p>
              <div className="wei-book-price">$300</div>
            </div>
          </div>
        </div>
        <h5 className="wei-detail-books-subtitle">最近瀏覽</h5>
        <div className="row justify-content-center">
          <div className="col-5 col-md-4 col-lg-2 wei-card">
            <div className="wei-card-icon">NEW</div>
            <div className="wei-card-pic position-relative">
              <div className="wei-book-pic">
                <img
                  className="w-100"
                  src="/images/books/5ffd7ab5a282a.jpg"
                  alt=""
                />
              </div>
              <div className="wei-heart-bg">
                <FaHeart className="wei-heart" />
              </div>
            </div>
            <div className="wei-book-text">
              <p className="wei-book-title">
                婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
              </p>
              <p className="wei-book-author">約翰．伯格</p>
              <div className="wei-book-price">$300</div>
            </div>
          </div>
          <div className="col-5 col-md-4 col-lg-2 wei-card">
            <div className="wei-card-icon">NEW</div>
            <div className="wei-card-pic position-relative">
              <div className="wei-book-pic">
                <img
                  className="w-100"
                  src="/images/books/5ffd7ab5a282a.jpg"
                  alt=""
                />
              </div>
              <div className="wei-heart-bg">
                <FaHeart className="wei-heart" />
              </div>
            </div>
            <div className="wei-book-text">
              <p className="wei-book-title">
                婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
              </p>
              <p className="wei-book-author">約翰．伯格</p>
              <div className="wei-book-price">$300</div>
            </div>
          </div>
          <div className="col-5 col-md-4 col-lg-2 wei-card">
            <div className="wei-card-icon">NEW</div>
            <div className="wei-card-pic position-relative">
              <div className="wei-book-pic">
                <img
                  className="w-100"
                  src="/images/books/5ffd7ab5a282a.jpg"
                  alt=""
                />
              </div>
              <div className="wei-heart-bg">
                <FaHeart className="wei-heart" />
              </div>
            </div>
            <div className="wei-book-text">
              <p className="wei-book-title">
                婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
              </p>
              <p className="wei-book-author">約翰．伯格</p>
              <div className="wei-book-price">$300</div>
            </div>
          </div>
          <div className="col-5 col-md-4 col-lg-2 wei-card">
            <div className="wei-card-icon">NEW</div>
            <div className="wei-card-pic position-relative">
              <div className="wei-book-pic">
                <img
                  className="w-100"
                  src="/images/books/5ffd7ab5a282a.jpg"
                  alt=""
                />
              </div>
              <div className="wei-heart-bg">
                <FaHeart className="wei-heart" />
              </div>
            </div>
            <div className="wei-book-text">
              <p className="wei-book-title">
                婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
              </p>
              <p className="wei-book-author">約翰．伯格</p>
              <div className="wei-book-price">$300</div>
            </div>
          </div>
          <div className="col-5 col-md-4 col-lg-2 wei-card">
            <div className="wei-card-icon">NEW</div>
            <div className="wei-card-pic position-relative">
              <div className="wei-book-pic">
                <img
                  className="w-100"
                  src="/images/books/5ffd7ab5a282a.jpg"
                  alt=""
                />
              </div>
              <div className="wei-heart-bg">
                <FaHeart className="wei-heart" />
              </div>
            </div>
            <div className="wei-book-text">
              <p className="wei-book-title">
                婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
              </p>
              <p className="wei-book-author">約翰．伯格</p>
              <div className="wei-book-price">$300</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductDetail)
