import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-customer-item-detail',
  templateUrl: './customer-item-detail.component.html',
  styleUrls: ['./customer-item-detail.component.scss']
})
export class CustomerItemDetailComponent implements OnInit {


  constructor(private dialog: MatDialog) { }

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  array = [
    {
      productId: 1,
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
    {
      productId: 1,
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
    {
      productId: 1,
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
    {
      productId: 1,
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
    {
      productId: 1,

      link: "/apps/products/customer-item-detail",
      value: "عرض",
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
    {
      productId: 1,

      link: "/apps/products/customer-item-detail",
      value: "عرض",
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
  ]

  current = {
    productId: 1,
    link: "/apps/products/customer-item-detail",
    value: "عرض",
    title: ' شوفان كويكر 500جم',
    image: '../../../../../assets/images/Oats.jpg',
    info: 15,
    barcode: '../../../../../assets/images/Barcode.png',
    amount: 1
  }

  link = "/apps/products/customer-cart"
  value = "اضف الى السلة"
  barcode = '../../../../../assets/images/Barcode.png';
  amount = 1;

  currentIndex = 0;
  itemsCount = this.array.length;
  visibleItems = 4;



  scrollLeft() {
    if (!this.isAtStart()) {
      this.currentIndex--;
      this.updateScrollPosition();
    }
  }

  scrollRight() {
    if (!this.isAtEnd()) {
      this.currentIndex++;
      this.updateScrollPosition();
    }
  }

  private updateScrollPosition() {
    const itemWidth = 300;
    const offset = this.currentIndex * itemWidth;
    this.scrollContainer.nativeElement.style.transform = `translateX(-${offset}px)`;
  }

  isAtStart(): boolean {
    return this.currentIndex === 0;
  }

  isAtEnd(): boolean {
    return this.currentIndex >= this.itemsCount - this.visibleItems;
  }


  inc() {
    this.amount += 1;
  }

  dec() {
    if (this.amount > 0) {
      this.amount -= 1;
    }
  }


  ngOnInit(): void {

  }

}
