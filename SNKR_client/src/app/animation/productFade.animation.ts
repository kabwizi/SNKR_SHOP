import { animate, style, transition, trigger } from '@angular/animations';

export const productFade: any[] | undefined = [
  trigger('openClose', [
    transition('void => *', [
      style({
        opacity: 0,
      }),
      animate('0.5s'),
    ]),
    transition('* => void', [
      style({
        opacity: 1,
      }),
      animate('1s'),
    ]),
    transition('void => *', [
      style({
        opacity: 1,
      }),
      animate('0.5s'),
    ]),
  ]),
];
