import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductsLinesPage } from './products-lines.page';

describe('ProductsLinesPage', () => {
  let component: ProductsLinesPage;
  let fixture: ComponentFixture<ProductsLinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsLinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsLinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
