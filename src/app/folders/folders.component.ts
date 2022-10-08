import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { NodeModel } from '../node.model';
import { FoldersService } from '../folders.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  parentFolder: string = '';
  typeOfFolder: string = '';
  currentNode = {};
  TREE_DATA: NodeModel[] = [
    {
      type: 'folder',
      name: 'my_first_folder',
      children: [
        {
          type: 'file',
          name: 'first_doc.html',
          id: '1'
        },
        {
          type: 'file',
          name: 'second_doc.jpeg',
          id: '2'
        },
        {
          type: 'folder',
          name: 'my_second_folder',
          children: [
            {
              type: 'file',
              name: 'file_in_second_folder.txt',
              id: '3'
            },
            {
              type: 'folder',
              name: 'another_folder',
              children: [
                {
                  type: 'file',
                  name: 'random.txt',
                  id: '4'
                },
                {
                  type: 'file',
                  name: 'another_file.png',
                  id: '5'
                },
                {
                  type: 'file',
                  name: 'helloworld.html',
                  id: '6'
                }
              ],
              id: '7'
            }
          ],
          id: '8'
        }
      ],
      id: '9'
    }
  ];

  folders: NodeModel[] = [];
  constructor(private service: FoldersService) {
    this.TREE_DATA = localStorage.getItem('TREE_DATA') ? JSON.parse(localStorage.getItem('TREE_DATA')) : this.TREE_DATA;
    this.dataSource.data = this.TREE_DATA;
  }

  ngOnInit() {
    this.service.getFolders().subscribe((res) => {
      this.folders = res;
    })
  }

  removeFromTree(parent, childNameToRemove) {
    parent.children = parent.children
      .filter(function (child) { return child.name !== childNameToRemove })
      .map(function (child) { return this.removeFromTree(child, childNameToRemove) });
    return parent;
  }

  treeControl = new NestedTreeControl<NodeModel>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<NodeModel>();

  hasChild = (_: number, node: NodeModel) =>
    !!node.children && node.children.length > 0;

  hasNoContent = (_: number, _nodeData: NodeModel) => _nodeData.name === '';

  displayForm() {
    const formDiv = document.getElementById('folderForm');

    if (formDiv) {
      formDiv.style.display = "flex";
    }
  }

  hideForm() {
    const formDiv = document.getElementById('folderForm');

    if (formDiv) {
      formDiv.style.display = "none";
    }
  }

  fileOrFolder(node){
    this.parentFolder = node.name;
    this.currentNode = node;
    const btnDiv = document.getElementById('fileOrFolder');
    if(btnDiv) {
      btnDiv.style.display = "flex";
    }
  }

  displayChildForm(type) {
    this.typeOfFolder = type;

    const btnDiv = document.getElementById('fileOrFolder');
    if(btnDiv) {
      btnDiv.style.display = "none";
    }
    
    const formDiv = document.getElementById('addFolder');
    if (formDiv) {
      formDiv.style.display = "flex";
    }
  }

  hideChildForm() {
    const formDiv = document.getElementById('addFolder');

    if (formDiv) {
      formDiv.style.display = "none";
    }
  }

  addFolderToRoot() {
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    if (name) {
      this.TREE_DATA.push(({ type: 'folder', name: name, children: [], id: name }));
      localStorage.setItem('TREE_DATA', JSON.stringify(this.TREE_DATA));
      this.dataSource.data = this.TREE_DATA;
      const formDiv = document.getElementById('folderForm');
      formDiv.style.display = "none";
    }
  }

  recursiveRemove(list, id) {
    return list.map(item => { return { ...item } })
      .filter(item => {
        if ('children' in item) {
          item.children = this.recursiveRemove(item.children, id);
        }
        return item.id !== id;
      });
  }

  delete(node) {
    this.TREE_DATA = localStorage.getItem('TREE_DATA') ? JSON.parse(localStorage.getItem('TREE_DATA')) : this.TREE_DATA;
    this.TREE_DATA = this.recursiveRemove(this.TREE_DATA, node.id);
    localStorage.setItem('TREE_DATA', JSON.stringify(this.TREE_DATA));
    this.dataSource.data = this.TREE_DATA;
  }

  addItemToNodes() {
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    if (name) {
      this.TREE_DATA.push(({ type: 'folder', name: name, id: '14' }));
      localStorage.setItem('TREE_DATA', JSON.stringify(this.TREE_DATA));
      this.dataSource.data = this.TREE_DATA;
      const formDiv = document.getElementById('folderForm');
      formDiv.style.display = "none";
    }
  }

  recursiveAdd(arr, value, newFile) {
    console.log("the args are",arr, value, newFile);
    arr.forEach(i => {
      if (i.name == value && i.type == 'folder') {
        i.children = [...i.children, {
          type: this.typeOfFolder,
          name: newFile,
          id: '16'
        }]
      } else {
        this.recursiveAdd(i.children ? i.children : [], value, newFile)
      }
    });
    localStorage.setItem('TREE_DATA', JSON.stringify(this.TREE_DATA));
  }

  addChildren() {
    var newName = (<HTMLInputElement>document.getElementById("child")).value;
    if (newName) {
      this.recursiveAdd(this.TREE_DATA, this.parentFolder, newName);
      this.TREE_DATA = localStorage.getItem('TREE_DATA') ? JSON.parse(localStorage.getItem('TREE_DATA')) : this.TREE_DATA;
      this.dataSource.data = this.TREE_DATA;
      const formDiv = document.getElementById('addFolder');
      if (formDiv) {
        formDiv.style.display = "none";
      }
    }
  }
}
