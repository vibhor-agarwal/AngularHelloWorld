import { LikeComponent } from './like.component';

let component = new LikeComponent(5, false);
component.onClick();
console.log(`Component : likes = ${component.LikesCount}, selected = ${component.IsSelected}`);