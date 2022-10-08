import { Component } from '@angular/core';
interface Tree {
	root: TreeNode;
}
 
interface TreeNode {
	label: string;
	children: TreeNode[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'folder-structure-maker';
}
