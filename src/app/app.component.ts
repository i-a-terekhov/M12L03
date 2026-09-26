import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: ProductType[] = [
    {
      image: 'item1.png',
      title: 'Мясная Делюкс',
      description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы'
    },
    {
      image: 'item2.png',
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось'
    },
    {
      image: 'item3.png',
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста'
    },
    {
      image: 'item4.png',
      title: 'Куриная Делюкс',
      description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста'
    },
    {
      image: 'item5.png',
      title: 'Барбекю Премиум',
      description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили'
    },
    {
      image: 'item6.png',
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная'
    },
    {
      image: 'item7.png',
      title: 'Куриное трио',
      description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы'
    },
    {
      image: 'item8.png',
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный'
    },
  ];

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title;
  }

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Please enter a valid product');
      return;
    }
    if (!this.formValues.address) {
      alert('Please enter a valid address');
      return;
    }
    if (!this.formValues.phone) {
      alert('Please enter a valid phone number');
      return;
    }

    // axaj
    alert('Спасибо за заказ!');

    this.formValues = {
      productTitle: '',
      address: '',
      phone: '',
    }
  }
}
