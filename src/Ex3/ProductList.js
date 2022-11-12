import React, { Component } from "react";
import ProductDetail from "./ProductDetail";
import ProductItem from "./ProductItem";
import Cart from "./Cart";
import styles from "./ProductList.module.css";

export default class ProductList extends Component {
  products = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];

  //để thằng con truyền dữ liệu lên cho thằng cha, thì tạo 1 cái biến hứng, mà cái biến này là 1 cái biến bình thường, khi nó thay đổi thì component không quan tâm, nên muốn giao diện load lại được thì phải bỏ nó vào state, chỗ nào sử dụng biến selectedItem này thì phải dùng hàm this.setState
  state = { selectedItem: null, isShowCart: false, cart: [] };

  //sau đó tạo 1 function để chỉnh sửa cái biến hứng đó, rồi tiếp tục truyền ngược lại qua cho thằng con
  //ngữ cảnh lúc này sẽ là khi thằng con nhấn nút, ví dụ nút "xem chi tiết", nhưng cái hàm lại chạy ở thằng cha, tham số thằng con truyền vào cái hàm là nguyên cái đối tượng item lên cho thằng cha, thằng cha hứng và set lại cái biến hứng lúc này là item
  //tóm lại thằng cha viết ra 1 cái công cụ, rồi quăng cho thằng con sử dụng
  setSelectedItem = (dataFromChild) => {
    this.setState({
      selectedItem: dataFromChild, //lưu dữ liệu từ thằng con productItem vào biến hứng để truyền tiếp qua productDetail
    });
  };

  renderProducts = () => {
    //map các đối tượng trong mảng products thành từng thẻ div, sau đó truyền qua thằng component con ProductItem, vì thằng item chịu trách nhiệm xử lý những cái liên quan đển item
    const html = this.products.map((item) => {
      return (
        <div key={item.id} className={styles.col}>
          <ProductItem
            item={item}
            setSelectedItem={this.setSelectedItem}
            addToCart={this.addToCart}
          />
          {/* truyền các đối tượng trong mảng products sang component con ProductItem với cái tên là item, nguyên tắc truyền dữ liệu bài tập này là thằng cha truyền qua con, hoặc con lên cha lấy, các thằng con thì không được truyền cho nhau, phải thông qua cha */}
          {/* truyền cái hàm setSelectedItem cho thằng con productItem với cái tên là setSelectedItem */}
        </div>
      );
    });
    return html;
  };

  //hàm có chức năng hiện component Cart khi bấm nút "Giỏ hàng"
  showCart = () => {
    this.setState({
      isShowCart: true,
    });
  };

  //hàm có chức năng tắt component Cart khi bấm nút "X" trên component Cart, nghĩa là phải render lại giao diện thằng cha là productList, nhưng dấu "X" thì ở component con là Cart, còn hàm thì lại viết ở thằng cha productList, nên để có thể render lại được giao diện thì khi viết xong hàm hideCart thì ta phải truyền xuống thằng con
  //ở thằng con thì khi nhấn nút, sẽ gọi ngược hàm của thằng cha chạy
  hideCart = () => {
    this.setState({
      isShowCart: false,
    });
  };

  //hàm thêm sản phẩm vào giỏ hàng
  addToCart = (prod) => {
    const cartItem = {
      prod: prod,
      quantity: 1,
    };
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => prod.id === item.prod.id);

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      cloneCart.push(cartItem);
    }

    //cập nhật lại biến cart trong state
    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };

  //hàm tính tổng số lượng sản phẩm trong cart
  calcTotalProductInCart = () => {
    return this.state.cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  //xóa sản phẩm trong giỏ hàng
  deleteCartItem = (id) => {
    const cloneCart = [...this.state.cart];
    const foundIndex = cloneCart.findIndex((item) => id === item.prod.id);
    cloneCart.splice(foundIndex, 1);
    this.setState({
      cart: cloneCart,
    });
  };

  //tăng sản phẩm trong giỏ hàng
  increaseQuantity = (id) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => id === item.prod.id);

    if (foundItem) {
      foundItem.quantity += 1;
    }

    //cập nhật lại biến cart trong state
    this.setState({
      cart: cloneCart,
    });
  };

  //giảm sản phẩm trong giỏ hàng
  decreaseQuantity = (id) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => id === item.prod.id);

    if (foundItem && foundItem.quantity > 1) {
      foundItem.quantity -= 1;
    }

    //cập nhật lại biến cart trong state
    this.setState({
      cart: cloneCart,
    });
  };

  //thằng productList là thằng component cha, khi nó bị render lại thì nó sẽ kéo theo toàn bộ component con render lại
  render() {
    return (
      <div>
        <h1
          onClick={this.showCart}
          className="text-end pe-5"
          style={{ cursor: "pointer" }}
        >
          Giỏ hàng ({this.calcTotalProductInCart()})
        </h1>
        <div className={styles.row}>{this.renderProducts()}</div>

        {/*productList sẽ truyền biến hứng được là selectedItem từ productItem sang productDetail với cái tên là item */}
        {/* ban đầu khi bật trang web, nếu người dùng không bấm xem chi tiết thì căn bản là component productDetail không cần hiện, selectedItem trong state sẽ null, nếu ko null thì hiện component productDetail lên */}
        {this.state.selectedItem ? (
          <ProductDetail item={this.state.selectedItem} />
        ) : null}

        {/* nếu isShowCart trong state bằng true thì hiện component giỏ hàng lên */}
        {/* truyền mảng cart từ state vào component cart */}
        {this.state.isShowCart && (
          <Cart
            deleteCartItem={this.deleteCartItem}
            cart={this.state.cart}
            hideCart={this.hideCart}
            increaseQuantity={this.increaseQuantity}
            decreaseQuantity={this.decreaseQuantity}
          />
        )}
      </div>
    );
  }
}
