import { Component, OnInit } from '@angular/core';
import { userData } from '../../services/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor],
  template: ` <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold mb-4">User List</h1>
    <ul class="space-y-4">
      <li *ngFor="let user of users" class="p-4 border rounded-lg bg-white shadow">
        <p class="font-semibold text-lg">{{ user.firstName }} {{ user.lastName }}</p>
        <p class="text-sm text-gray-500">{{ user.email }}</p>
      </li>
    </ul>
  </div>`,
})
export class User implements OnInit {
  users: any[] = [];

  constructor(private dataUser: userData) {}
  ngOnInit(): void {
    this.dataUser.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Gagal Mengambil Data User', err);
      },
    });
  }
}
