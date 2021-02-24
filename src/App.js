// 套件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// pages
import Home from './chia/pages/Home'
import Product from './wei/pages/Product'
import ProductDetail from './wei/pages/ProductDetail'
import Login from './yu/pages/Login'
import Register from './yu/pages/Register'
import Menu from './yu/pages/Menu'
import Edit from './yu/pages/Edit'
import Bookshelf from './yu/pages/Bookshelf'
import ActIndex from './yen/pages/ActIndex'
import ActEvent from './yen/pages/ActEvent'
// import ActAllSignUp from './yen/pages/ActAllSignUp'
// import ActCheckSignUp from './yen/pages/ActCheckSignUp'
import OldSeasons from './hans/pages/OldSeasons'
import UsedBooksIndex from './jill/pages/UsedBooksIndex'
import NormalIndex from './jill/pages/NormalIndex'
import NormalInsert from './jill/pages/NormalInsert'
import NormalEdit from './jill/pages/NormalEdit'
import IWantChange from './jill/pages/IWantChange'
import PeopleWantChange from './jill/pages/PeopleWantChange'
import SendIWantChange from './jill/pages/SendIWantChange'
import NormalSuccess from './jill/pages/NormalSuccess'
import RandomIndex from './jill/pages/RandomIndex'
import RandomInsert from './jill/pages/RandomInsert'
import RandomEdit from './jill/pages/RandomEdit'
import RandomSuccess from './jill/pages/RandomSuccess'
import RandSuccessStatus from './jill/pages/RandSuccessStatus'
import Cart from './aw/pages/Cart'
import CartItems from './aw/pages/CartItems'
import CartInput from './aw/pages/CartInput'
import CartConfirm from './aw/pages/CartConfirm'
import CartOrder from './aw/pages/CartOrder'

// components(navbar, footer..)
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'

// react-icons Fontawesome 對齊
import { IconContext } from 'react-icons'

function App() {
  return (
    <Router>
      <>
        <BackToTop />
        <Navbar />
        <MainContent>
          <ScrollToTop>
            <IconContext.Provider
              value={{ style: { transform: 'translateY(-2px)' } }}
            >
              <Switch>
                <Route path="/member">
                  <Login />
                </Route>
                <Route path="/bookshelf">
                  <Bookshelf />
                </Route>
                <Route path="/edit">
                  <Edit />
                </Route>
                <Route path="/menu">
                  <Menu />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
                <Route path="/CartItems">
                  <CartItems />
                </Route>
                <Route path="/CartInput">
                  <CartInput />
                </Route>
                <Route path="/CartConfirm">
                  <CartConfirm />
                </Route>
                <Route path="/CartOrder">
                  <CartOrder />
                </Route>
                <Route path="/activity/event/:sid">
                  <ActEvent />
                </Route>
                <Route path="/activity">
                  <ActIndex />
                </Route>
                {/* <Route path="/allsignup">
                  <ActAllSignUp />
                </Route>
                <Route path="/checksignup">
                  <ActCheckSignUp />
                </Route> */}
                <Route path="/old-seasons">
                  <OldSeasons />
                </Route>
                <Route path="/reviews">
                  <Home />
                </Route>
                <Route path="/used-books">
                  <UsedBooksIndex />
                </Route>
                <Route path="/NormalIndex">
                  <NormalIndex />
                </Route>
                <Route path="/NormalInsert">
                  <NormalInsert />
                </Route>
                <Route path="/NormalEdit">
                  <NormalEdit />
                </Route>
                <Route path="/IWantChange">
                  <IWantChange />
                </Route>
                <Route path="/PeopleWantChange">
                  <PeopleWantChange />
                </Route>
                <Route path="/SendIWantChange/:c_sid?">
                  <SendIWantChange />
                </Route>
                <Route path="/NormalSuccess">
                  <NormalSuccess />
                </Route>
                <Route path="/RandomIndex">
                  <RandomIndex />
                </Route>
                <Route path="/RandomInsert">
                  <RandomInsert />
                </Route>
                <Route path="/RandomEdit">
                  <RandomEdit />
                </Route>
                <Route path="/RandomSuccess">
                  <RandomSuccess />
                </Route>
                <Route path="/RandSuccessStatus">
                  <RandSuccessStatus />
                </Route>
                <Route path="/products/:sid?">
                  <ProductDetail />
                </Route>
                <Route path="/product/:category?">
                  <Product />
                </Route>
                {/* <Route exact path="/product">
                  <Product />
                </Route> */}
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </IconContext.Provider>
          </ScrollToTop>
        </MainContent>
        <Footer />
      </>
    </Router>
  )
}

export default App
