import { PaymentService } from './../../../core/services/payment.service';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/core/models/payment';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-parent-manage-payment-page',
  templateUrl: './parent-manage-payment-page.component.html',
  styleUrls: ['./parent-manage-payment-page.component.css']
})
export class ParentManagePaymentPageComponent implements OnInit{
  listPayment: Payment[] = [];
  parentId: string = '';
  constructor(private paymentService: PaymentService) {}
  ngOnInit(): void {
      this.parentId = localStorage.getItem('parentId') || "";
      this.paymentService.getPaymentByParentId(this.parentId).subscribe((res: ResponseDto) => {
        this.listPayment = res.data;
      })
  }
}
