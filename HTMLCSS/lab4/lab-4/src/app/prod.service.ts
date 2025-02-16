import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  protected productsList: Product[] = [
    {
      id: 0,
      name: 'Планшет Samsung Galaxy Tab',
      image: 'assets/images/84176915136542.jpg',
      description: 'Очень крутой планшет! Удобный, быстрый и качественный!',
      price: 87178,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/lador-moisture-balancing-nabor-po-uhodu-za-volosami-dlja-zhenschin-110402693/?0&c=750000000&ref=shared_link'
    },
    {
      id: 1,
      name: 'Рюкзак полиэстер, оксфорд черный',
      image: 'assets/images/84656597139486.jpg',
      'description': 'Качество сумки хорошее, соответствует своей цене',
      'price': 2899,
      'rating': 4.7,
      'link': 'https://kaspi.kz/shop/p/rjukzak-15378081-ids21090702-poliester-oksford-chernyi-109556758/?0&c=750000000&ref=shared_link',
    },
    {
      "id": 2,
      "name": "Умная колонка",
      "image": "assets/images/86495017107486.jpg",
      "description": "Умная колонка Новая Яндекс.Станция Мини YNDX-00020K черного цвета оснащена LED-дисплеем на передней стороне. Он показывает время, таймер и погоду. Акустическая система выходной мощностью 10 Вт воспроизводит четкий звук с пространственным эффектом",
      "price": 37980,
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/jandeks-stantsija-mini-s-chasami-yndx-00020-chernyi-102580021/?0&c=750000000&ref=shared_link"
    },
    {
      "id": 3,
      "name": "Клавиатура AULA F75 белый",
      "image": "assets/images/24789850.jpg",
      "description": "По клаве: на зелёных свечах. Тихая, приятная максимально, куча режимов RGB подсветки, 3 режима подключения, 2 пары ножек (маленькие и побольше).",
      "price": 20569,
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?0&c=750000000&ref=shared_link"
    },
    {
      "id": 4,
      "name": "Наушники Zidli ZGH05 черный",
      "image": "assets/images/18163120.jfif",
      "description": "В основе данной модели используются динамические излучатели с диаметром мембраны 40 мм, что в совокупности с широким диапазоном частот и высокой чувствительностью может обеспечить качественное и насыщенное звучание. ",
      "price": 24999,
      "rating": 4.7,
      "link": "https://kaspi.kz/shop/p/zidli-zgh05-chernyi-132869956/?c=750000000&m=17347695&sr=1&qid=7b1b87d41f975331333749848dfb15c9&isPromoted=true&ref=shared_link"
    },
    {
      "id": 5,
      "name": "Наушники Apple AirPods Pro 2",
      "image": "assets/images/84108189630494.jpg",
      "description": "Наушники снабжены активным шумоподавлением, но теперь инженеры Apple улучшили в новых аирподсах режим прозрачности, который еще лучше отсекает лишние шумы, при этом позволяя слышать происходящее вокруг. Улучшилась и функция Spatial Audio для пространственного звучания с отслеживанием положения головы слушателя.",
      "price": 111989,
      "rating": 4.9,
      "link":"https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000&sr=5&qid=133aff71535e466c5691d8887b418a99&ref=shared_link"
    },
    {
      "id": 6,
      "name": "Apple Iphone 16",
      "image": "assets/images/iphone.jpg",
      "description": "Iphone 16 - новый дизайн яркие цвета, мощный процессор и свежая iOS 18с искусственным интелектом.",
      "price": 418885,
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?0&c=750000000&ref=shared_link"
    },
    {
      "id": 7,
      "name": "Apple MacBook Air 13",
      "image": "assets/images/macbook.jpg",
      "description": "MacBook Air 13 2024 - это ультракомпактный ноутбук на процессоре Apple M3, ориентированный на максимальную автономность",
      "price": 759429,
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-512-gb-macos-mrxp3ru-a-118170753/?0&c=750000000&ref=shared_link"
    },
    {
      "id": 8,
      "name": "Очки дополненной реальности Apple Vision Pro 1024 Gb",
      "image": "assets/images/85124918935582.jpg",
      "description": "Apple Vision Pro, революционный пространственный компьютер, который органично сочетает цифровой контент с физическим миром, позволяя пользователям оставаться на связи с другими людьми. Идея шлема Vision Pro в том, чтобы выйти за границы традиционного дисплея, поскольку он представляет из себя персональный экран и трёхмерный пользовательский интерфейс, управляемый естественными и интуитивными вводами — глазами, руками и голосом пользователя.",
      "price": 2879700,
      "rating": 5,
      "link": "https://kaspi.kz/shop/p/apple-vision-pro-1024-gb-116503057/?c=750000000&sr=28&qid=66bcad5c02237724ee31ebc1f2783477&ref=shared_link"
    },
    {
      "id": 9,
      "name": "Apple AirPods Max",
      "image": "assets/images/headphone.jpg",
      "description": "Apple AirPods Max разработана с применением первоклассных материалов и передовых технологий.",
      "price": 270246,
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?0&c=750000000&ref=shared_link"
    }
  ];
  constructor() { }
  getAllProducts(): Product[] {
    return this.productsList;
  }

  getProductById(id: number): Product | undefined {
    return this.productsList.find((product) => product.id === id);
  }
}
