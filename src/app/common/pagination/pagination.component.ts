import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
	numbers
	@Input() page: number;
  @Input() pages: number;
  @Input() loading: boolean;

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  constructor() {  }

  ngOnChanges(){
  	this.numbers = Array(this.pages).fill(0).map((x,i)=>i+1);
  }

  onPage(n: number): void {
    this.goPage.emit(n);
  }

  onPrev(prev: boolean): void {
    this.goPrev.emit(true);
  }

  onNext(next: boolean): void {
    this.goNext.emit(next);
  }

  lastPage(): boolean {
  	if(this.pages){
  		return true
  	}    
  }

  getPages() {
    return this.numbers
  }
}
