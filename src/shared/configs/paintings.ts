import { IPainting } from '../types/painting';

export const paintingsList: Array<IPainting> = [
  {
    id: 1,
    image: 'birthVenus.jpg',
    label: 'Рождение Венеры',
    painter: 'Сандро Боттичелли',
    price: '2 000 000 $',
    discountPrice: '1 000 000 $',
    isSold: false,
  },
  {
    id: 2,
    image: 'lastSupper.jpg',
    label: 'Тайная вечеря',
    painter: 'Леонардо да Винчи',
    price: '3 000 000 $',
    discountPrice: '',
    isSold: false,
  },
  {
    id: 3,
    image: 'creationAdam.jpg',
    label: 'Сотворение Адама',
    painter: 'Микеланджело',
    price: '6 000 000 $',
    discountPrice: '5 000 000 $',
    isSold: false,
  },
  {
    id: 4,
    image: 'anatomyLesson.jpg',
    label: 'Урок анатомии',
    painter: 'Рембрандт',
    price: '',
    discountPrice: '',
    isSold: true,
  },
];
