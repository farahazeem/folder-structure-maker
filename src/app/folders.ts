import { NodeModel } from './node.model';

export const ExistingFolders: NodeModel[] = [
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