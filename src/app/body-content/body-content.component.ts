import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css']
})
export class BodyContentComponent implements OnInit {
  accessories: any[] = [];
  product: any[] = [];
  advertisement: any[] = [];

  constructor(private commonservice: CommonService) { }

  ngOnInit(): void {
    this.getAccessories();
    this.getProduct();
    this.getAdvertisement();
  }

  getAccessories = () => {
    var string = "../../assets/Images/";
    this.commonservice.getRequest("getaccessories").subscribe((data: any) => {
      this.accessories = data.data.map((items: any) => ({
        name: items.name,
        data: string + items.file_name + ".png"
      }));
    })
  }

  getProduct = () => {
    var string = "../../assets/Images/";
    this.commonservice.getRequest("getProduct").subscribe((data: any) => {
      this.product = data.data.map((items: any) => ({
        name: items.name,
        rate: items.rate,
        cost: items.cost,
        category: items.category,
        product_id: items.product_id,
        data: string + items.file_name + ".jpeg"
      }));
    })
  }

  getAdvertisement = () => {
    var string = "../../assets/Images/";
    this.commonservice.getRequest("getAdvertisement").subscribe((data: any) => {
      this.advertisement = data.data.map((items: any) => ({
        name: items.name,
        data: string + items.file_name + ".jpeg",
        slogan: items.slogan,
        is_price_tag: items.is_price_tag.toString()
      }));
    })
  }

  getStars(rate: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rate);
    }
    return stars;
  }

  arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  getImageData(image: any) {
    const uint8Array = new Uint8Array(image);
    const blobData = new Blob([uint8Array], { type: 'image/png' });
    const imageUrl = URL.createObjectURL(blobData);
    return imageUrl;
  }

  getbgcolor(items:any){
    console.log(items)
    return {
      "background-color":items == 0 ? "none;":"#fded03",
      "color":items == 0 ? "yellow":"black"
    }
  }
  
}
