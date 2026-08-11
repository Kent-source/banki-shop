import { IPainting } from '../types/painting';

export const paintingsList: Array<IPainting> = [
  {
    id: '1',
    mainImage: 'birthVenus.jpg',
    label: 'Рождение Венеры',
    painter: 'Сандро Боттичелли',
    price: '2 000 000 $',
    discountPrice: '1 000 000 $',
    isSold: false,
    images: ['birthVenus.jpg', 'birthVenus.jpg'],
  },
  {
    id: '2',
    mainImage: 'lastSupper.jpg',
    label: 'Тайная вечеря',
    painter: 'Леонардо да Винчи',
    price: '3 000 000 $',
    discountPrice: '',
    isSold: false,
    images: ['lastSupper.jpg', 'lastSupper.jpg', 'lastSupper.jpg'],
  },
  {
    id: '3',
    mainImage: 'creationAdam.jpg',
    label: 'Сотворение Адама',
    painter: 'Микеланджело',
    price: '6 000 000 $',
    discountPrice: '5 000 000 $',
    isSold: false,
    images: ['creationAdam.jpg', 'creationAdam.jpg', 'creationAdam.jpg', 'creationAdam.jpg'],
  },
  {
    id: '4',
    mainImage: 'anatomyLesson.jpg',
    label: 'Урок анатомии',
    painter: 'Рембрандт',
    price: '',
    discountPrice: '',
    isSold: true,
    images: ['anatomyLesson.jpg', 'anatomyLesson.jpg'],
  },
];
