import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';


/**
 * Side nav with nested structure.
 * Each node has a name and an optional list of children.
 */
interface OptionNode {
    name: string;
    icon?: string;
    children?: OptionNode[];
}

const SIDENAV_OPTIONS: OptionNode[] = [
    {
        name: 'Administration',
        icon: 'manage_accounts',
        children: [
            { name: 'Users' },
            { name: 'Groups' },
            { name: 'Roles' },
            { name: 'Permissions'}
        ]
    },
];


@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html'
})
export class SideNavComponent {


    dataSource = SIDENAV_OPTIONS;

    getChildren = (node: OptionNode) => node.children;

    treeControl = new NestedTreeControl(this.getChildren);

    hasChild = (_: number, node: OptionNode) => node.children != null && node.children.length > 0;

}
