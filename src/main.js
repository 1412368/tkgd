// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#navbar',
//   router,
//   template: '<NavBar/>',
//   components: {NavBar}
// })
// Vue.component('NavBar', {
//   // options
//   template: '<NavBar/>'
// })

const store = new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: {},
      sale: false,
      isLogin:false,
      userData: {
        // _id : '',
        username: 'admin',
        password: '12345678a',
        email: 'hieunhan3128@gmail.com',
        address: '72 Cộng hòa',
        birthday: '',
        gender:'',
        phone:'0917453360',
      },
      formData: {
        _id : '',
        username: '',
        password: '',
        email: '',
        address: '',
        birthday: '',
        gender:'',
        phone:'',
      },
      products: [
        {
          name: 'Khaki Suede Polish Work Boots',
          price: 149.99,
          category: 'women',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'1',
          description: [
            "Chất liệu vải ren thun êm ái, mềm mịn",
            "Thiết kế dáng bút chì tôn dáng thanh lịch",
            "Tông màu nền nã, dễ phối phụ kiện"
        ],
          rawHtml: ` <ul>
<li><strong>Áo Thun Nam</a> Cổ Tròn Tuấn Tú Store A1XD05 - Xanh Đen </strong>làm từ chất liệu cotton co giãn với bề mặt vải mềm mại, thấm hút mồ hôi tốt tạo cảm giác thoải mái, thoáng mát cho người mặc. </li>
<li>Đây cũng là chất liệu dễ giặt sạch, nhanh khô, giúp bạn tiết kiệm một khoảng thời gian đáng kể. </li>
<li>Chất liệu cotton co giãn với bề mặt vải mềm mịn, thấm hút mồ hôi tạo cảm giác thoải mái, thoáng mát cho người mặc.</li>
<li>Áo chống nhăn tốt, dễ giặt sạch, nhanh khô.</li>
<li>Form áo vừa vặn cơ thể, thoải mái theo từng cử động.</li>
<li>Kiểu cổ tròn kết hợp cùng tay ngắn vừa đơn giản, trẻ trung vừa thoải mái, năng động.</li>
<li>Áo trơn đơn sắc dễ dàng trong việc phối đồ và dễ dàng tạo ra cho mình nhiều phong cách khác nhau.</li>
<li>Bạn có thể phối áo cùng quần short, quần jean, quần kaki với giày thể thao hay giày xăng đan để đi dạo phố cùng bạn bè, người thân.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><strong><img title="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" alt="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" width="638" height="355" src="https://tikicdn.com/media/catalog/product/u/n/untitled-1.u5533.d20170901.t093139.913545.jpg" style="display: block;"></strong></p>
<p><strong><img title="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" alt="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" width="626" height="328" src="https://tikicdn.com/media/catalog/product/d/s/dsd.u5533.d20170901.t100359.814393.jpg" style="display: block;"><br></strong></p>
<p><strong><br></strong></p>            </div>`,
        },
        {
          name: 'Camo Fang Backpack Jungle',
          price: 39.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'main.jpg',
          index:'2',
          description: [
            "Chất liệu vải ren thun êm ái, mềm mịn",
            "Thiết kế dáng bút chì tôn dáng thanh lịch",
            "Tông màu nền nã, dễ phối phụ kiện"
        ],
          rawHtml: ` <ul>
<li><strong>Áo Thun Nam</a> Cổ Tròn Tuấn Tú Store A1XD05 - Xanh Đen </strong>làm từ chất liệu cotton co giãn với bề mặt vải mềm mại, thấm hút mồ hôi tốt tạo cảm giác thoải mái, thoáng mát cho người mặc. </li>
<li>Đây cũng là chất liệu dễ giặt sạch, nhanh khô, giúp bạn tiết kiệm một khoảng thời gian đáng kể. </li>
<li>Chất liệu cotton co giãn với bề mặt vải mềm mịn, thấm hút mồ hôi tạo cảm giác thoải mái, thoáng mát cho người mặc.</li>
<li>Áo chống nhăn tốt, dễ giặt sạch, nhanh khô.</li>
<li>Form áo vừa vặn cơ thể, thoải mái theo từng cử động.</li>
<li>Kiểu cổ tròn kết hợp cùng tay ngắn vừa đơn giản, trẻ trung vừa thoải mái, năng động.</li>
<li>Áo trơn đơn sắc dễ dàng trong việc phối đồ và dễ dàng tạo ra cho mình nhiều phong cách khác nhau.</li>
<li>Bạn có thể phối áo cùng quần short, quần jean, quần kaki với giày thể thao hay giày xăng đan để đi dạo phố cùng bạn bè, người thân.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><strong><img title="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" alt="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" width="638" height="355" src="https://tikicdn.com/media/catalog/product/u/n/untitled-1.u5533.d20170901.t093139.913545.jpg" style="display: block;"></strong></p>
<p><strong><img title="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" alt="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" width="626" height="328" src="https://tikicdn.com/media/catalog/product/d/s/dsd.u5533.d20170901.t100359.814393.jpg" style="display: block;"><br></strong></p>
<p><strong><br></strong></p>            </div>`,
        },
        {
          name: 'Parka and Quilted Liner Jacket',
          price: 49.99,
          category: 'men',
          sale: true,
          article: 'jacket',
          img: 'main.jpg',
          index:'3',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml: ` <ul>
<li><strong>Áo Thun Nam</a> Cổ Tròn Tuấn Tú Store A1XD05 - Xanh Đen </strong>làm từ chất liệu cotton co giãn với bề mặt vải mềm mại, thấm hút mồ hôi tốt tạo cảm giác thoải mái, thoáng mát cho người mặc. </li>
<li>Đây cũng là chất liệu dễ giặt sạch, nhanh khô, giúp bạn tiết kiệm một khoảng thời gian đáng kể. </li>
<li>Chất liệu cotton co giãn với bề mặt vải mềm mịn, thấm hút mồ hôi tạo cảm giác thoải mái, thoáng mát cho người mặc.</li>
<li>Áo chống nhăn tốt, dễ giặt sạch, nhanh khô.</li>
<li>Form áo vừa vặn cơ thể, thoải mái theo từng cử động.</li>
<li>Kiểu cổ tròn kết hợp cùng tay ngắn vừa đơn giản, trẻ trung vừa thoải mái, năng động.</li>
<li>Áo trơn đơn sắc dễ dàng trong việc phối đồ và dễ dàng tạo ra cho mình nhiều phong cách khác nhau.</li>
<li>Bạn có thể phối áo cùng quần short, quần jean, quần kaki với giày thể thao hay giày xăng đan để đi dạo phố cùng bạn bè, người thân.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><strong><img title="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" alt="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" width="638" height="355" src="https://tikicdn.com/media/catalog/product/u/n/untitled-1.u5533.d20170901.t093139.913545.jpg" style="display: block;"></strong></p>
<p><strong><img title="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" alt="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" width="626" height="328" src="https://tikicdn.com/media/catalog/product/d/s/dsd.u5533.d20170901.t100359.814393.jpg" style="display: block;"><br></strong></p>
<p><strong><br></strong></p>            </div>`,
        },
        {
          name: 'Cotton Black Cap',
          price: 12.99,
          category: 'men',
          sale: true,
          article: 'hats',
          img: 'main.jpg',
          index:'4',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml: ` <ul>
<li><strong>Áo Thun Nam</a> Cổ Tròn Tuấn Tú Store A1XD05 - Xanh Đen </strong>làm từ chất liệu cotton co giãn với bề mặt vải mềm mại, thấm hút mồ hôi tốt tạo cảm giác thoải mái, thoáng mát cho người mặc. </li>
<li>Đây cũng là chất liệu dễ giặt sạch, nhanh khô, giúp bạn tiết kiệm một khoảng thời gian đáng kể. </li>
<li>Chất liệu cotton co giãn với bề mặt vải mềm mịn, thấm hút mồ hôi tạo cảm giác thoải mái, thoáng mát cho người mặc.</li>
<li>Áo chống nhăn tốt, dễ giặt sạch, nhanh khô.</li>
<li>Form áo vừa vặn cơ thể, thoải mái theo từng cử động.</li>
<li>Kiểu cổ tròn kết hợp cùng tay ngắn vừa đơn giản, trẻ trung vừa thoải mái, năng động.</li>
<li>Áo trơn đơn sắc dễ dàng trong việc phối đồ và dễ dàng tạo ra cho mình nhiều phong cách khác nhau.</li>
<li>Bạn có thể phối áo cùng quần short, quần jean, quần kaki với giày thể thao hay giày xăng đan để đi dạo phố cùng bạn bè, người thân.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><strong><img title="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" alt="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" width="638" height="355" src="https://tikicdn.com/media/catalog/product/u/n/untitled-1.u5533.d20170901.t093139.913545.jpg" style="display: block;"></strong></p>
<p><strong><img title="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" alt="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" width="626" height="328" src="https://tikicdn.com/media/catalog/product/d/s/dsd.u5533.d20170901.t100359.814393.jpg" style="display: block;"><br></strong></p>
<p><strong><br></strong></p>            </div>`,
        },
        {
          name: 'Knit Sweater with Zips',
          price: 29.99,
          category: 'women',
          sale: false,
          article: 'phone',
          img: 'main.jpg',
          index:'5',
          description: [
            "Chất liệu vải ren thun êm ái, mềm mịn",
            "Thiết kế dáng bút chì tôn dáng thanh lịch",
            "Tông màu nền nã, dễ phối phụ kiện"
        ],
          rawHtml: ` <ul>
<li><strong>Áo Thun Nam</a> Cổ Tròn Tuấn Tú Store A1XD05 - Xanh Đen </strong>làm từ chất liệu cotton co giãn với bề mặt vải mềm mại, thấm hút mồ hôi tốt tạo cảm giác thoải mái, thoáng mát cho người mặc. </li>
<li>Đây cũng là chất liệu dễ giặt sạch, nhanh khô, giúp bạn tiết kiệm một khoảng thời gian đáng kể. </li>
<li>Chất liệu cotton co giãn với bề mặt vải mềm mịn, thấm hút mồ hôi tạo cảm giác thoải mái, thoáng mát cho người mặc.</li>
<li>Áo chống nhăn tốt, dễ giặt sạch, nhanh khô.</li>
<li>Form áo vừa vặn cơ thể, thoải mái theo từng cử động.</li>
<li>Kiểu cổ tròn kết hợp cùng tay ngắn vừa đơn giản, trẻ trung vừa thoải mái, năng động.</li>
<li>Áo trơn đơn sắc dễ dàng trong việc phối đồ và dễ dàng tạo ra cho mình nhiều phong cách khác nhau.</li>
<li>Bạn có thể phối áo cùng quần short, quần jean, quần kaki với giày thể thao hay giày xăng đan để đi dạo phố cùng bạn bè, người thân.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><strong><img title="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" alt="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" width="638" height="355" src="https://tikicdn.com/media/catalog/product/u/n/untitled-1.u5533.d20170901.t093139.913545.jpg" style="display: block;"></strong></p>
<p><strong><img title="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" alt="Áo Thun Nam T-Shirt Cổ Tròn Tuấn Tú Store A1D010 - Đen" width="626" height="328" src="https://tikicdn.com/media/catalog/product/d/s/dsd.u5533.d20170901.t100359.814393.jpg" style="display: block;"><br></strong></p>
<p><strong><br></strong></p>            </div>`,
        },
        {
          name: 'Long Linen-blend Shirt',
          price: 18.99,
          category: 'men',
          sale: false,
          article: 'cloth',
          img: 'main.jpg',
          index:'6',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`
        },
        {
          name: 'Knit Orange Sweater',
          price: 28.99,
          category: 'men',
          sale: false,
          article: 'cloth',
          img: 'main.jpg',
          index:'7',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },
        {
          name: 'Cotton Band-collar Blouse',
          price: 49.99,
          category: 'men',
          sale: false,
          article: 'cloth',
          img: 'main.jpg',
          index:'8',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },
        {
          name: 'Camo Fang Backpack Jungle',
          price: 59.99,
          category: 'women',
          sale: true,
          article: 'jacket',
          img: 'main.jpg',
          index:'9',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },
        {
          name: 'Golden Pilot Jacket',
          price: 129.99,
          category: 'women',
          sale: false,
          article: 'cloth',
          img: 'main.jpg',
          index:'10',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },
        {
          name: 'Spotted Patterned Sweater',
          price: 80.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'main.jpg',
          index:'11',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },
        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'12',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },
        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'13',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },
        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'14',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },
        {
          name: 'Jewelry',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'jewelry',
          img: 'main.jpg',
          index:'15',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },
        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'16',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },
        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'17',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },
        {
          name: 'Jewelry',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'jewelry',
          img: 'main.jpg',
          index:'18',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },

        {
          name: 'Jewelry',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'jewelry',
          img: 'main.jpg',
          index:'19',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'20',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'21',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'22',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'23',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'24',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },

        {
          name: 'Kid Cloth',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'cloth',
          img: 'main.jpg',
          index:'25',
          description: [
            "Chất liệu cotton mềm mại",
            "Cổ tròn và tay ngắn năng động",
            "Kiểu dáng khỏe khoắn, mạnh mẽ",
            "Thiết kế cơ bản dễ phối đồ"
        ],
          rawHtml:`<ul>
<li><strong>Áo Sơ Mi Nam Tay Dài VFASHION VFS0004 - Đen </strong>giúp bạn nam trông lịch lãm và sang trọng hơn với thiết kế sang trọng, gia công sắc sảo.</li>
<li>Form slim ôm gọn gàng, trẻ trung, tay dài thanh lịch.</li>
<li>Sản phẩm may từ vải kate cao cấp, được biết đến với đặc tính thấm hút mồ hôi tốt, thoáng mát ngay cả trong điều kiện thời thiết nóng bức cho form áo đứng, sang trọng. Bề mặt vải mềm mịn. Vải kate còn có đặc tính chống bám bẩn và chống mài mòn tốt, đảm bảo sự bền đẹp với thời gian, dễ giặt, nhanh khô.</li>
<li>Bạn có thể kết hợp cùng quần tây, jeans, kaki cho phong cách thời trang đa dạng.</li>
</ul>
<p><strong>Hướng dẫn chọn size:</strong></p>
<p><img title="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" alt="Áo Sơ Mi Nam Tay Dài VFASHION VFS0001 - Trắng" width="1100" height="722" src="https://vdcn.tikicdn.com/ts/tmp/a6/07/84/16a61d2b7547dbda57a51e8630d4942f.jpeg" style="display: block;"></p>            </div>`,
        },
      ]
    },
    getters: {
      women: state => filter(state.products, 'category', 'women'),
      men: state => filter(state.products, 'category', 'men'),
      sale: state => filter(state.products, 'sale', true)
    },
    mutations: {
      switchSale: state => {
        state.sale = !state.sale;
      },
      clearCartCount: state => {
        state.cartTotal = 0;
        state.cart={};
      },
      clearCartContents: state => {
        state.cart = {};
      },
      addItem: (state, item) => {
        state.cartTotal++;
        if (item.name in state.cart) {
          state.cart[item.name].count++;
        } else {
          let stateItem = Object.assign({}, item);
          stateItem.count = 1;
          state.cart[item.name] = stateItem;
        }
      }
    }
});

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);

new Vue({
  el: '#app',
  components: {
    App,
  },
  store,
  router,
  render: h => h('app'),
});
