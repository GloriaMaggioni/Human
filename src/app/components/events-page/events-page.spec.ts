import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPage } from './events-page';
import {of} from 'rxjs';
import { NewsService } from '../../services/news.service';


const mockEvent = [
  {
      id: '1',
      name : 'Event of test',
      type: 'event',
      info: 'test per vedere se funziona correttamente',
      classifications: [{
         name: 'sport',
         genre: {name:'soccer'},
         subgenre: {name:'Serie A'}
      }]

    }

]

const NewsServiceStub = {
  fetchData: () => of ({_embedded: {events: mockEvent }})
}

describe('EventsPage', () => {
  let component: EventsPage;
  let fixture: ComponentFixture<EventsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsPage],
      providers: [{provide: NewsService, useValue: NewsServiceStub}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should load events', () => {
  fixture.detectChanges();
  expect(component.cards).toEqual(mockEvent);
});
});
