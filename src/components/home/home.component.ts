import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { NewTabComponent } from '../new-tab/new-tab.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule, TopBarComponent, NewTabComponent, MatIconModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tabs: any = [{}];
  selectedTabIndex = 0;

  createNewTab() {
    this.tabs.push({});
    this.selectedTabIndex = this.tabs.length - 1;
  }

  selectTab(index: number) {
    this.selectedTabIndex = index;
  }

  updateTabData(index: number, data: any) {
    this.tabs[index].data = data;
    console.log(this.tabs[index]);
  }

  closeTab(index: number, event: MouseEvent) {
    event.stopPropagation();
    this.tabs.splice(index, 1);
    if (this.selectedTabIndex >= this.tabs.length) {
      this.selectedTabIndex = this.tabs.length - 1;
    }
  }
}
