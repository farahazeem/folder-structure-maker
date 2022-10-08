import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { NodeModel } from './node.model';
import { ExistingFolders } from './folders';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {

  constructor() { }

  getFolders(): Observable<NodeModel[]> {
    const folders = of(ExistingFolders);
    return folders;
  }
}
