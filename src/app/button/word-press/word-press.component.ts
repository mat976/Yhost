import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as ssh2 from 'ssh2';

interface RamPrices {
  [key: string]: number;
}

interface CpuPrices {
  [key: string]: number;
}

@Component({
  selector: 'app-word-press',
  templateUrl: './word-press.component.html',
  styleUrls: ['./word-press.component.css']
})
export class WordPressComponent {
  ramValue: string = '';
  memoryValue: string = '';
  price: number = 0;

  constructor(private http: HttpClient) {}

  calculatePrice() {
    const ramPrices: RamPrices = {
      '256': 1,
      '512': 2,
      '1000': 3,
      '2000': 4,
    };

    const CpuPrices: CpuPrices = {
      '1': 5,
      '2': 10,
      '3': 15,
    };

    const ramPrice = ramPrices[this.ramValue];
    const cpuPrice = CpuPrices[this.memoryValue];
    this.price = ramPrice + cpuPrice;
  }
  
  deploy() {
    const host = '192.168.120.191';
<<<<<<< HEAD
    const username = 'user';
    const password = '54xt7Tv7Ljc3SE57HnFv5vN';
=======
    const username = 'user';
>>>>>>> parent of 5706fca (test 3)
    const command = `sh script_deploy_debian_11.sh --name=test1 --cpu=${this.memoryValue} --ram=${this.ramValue}`;
  
    const conn = new ssh2.Client();
    conn.on('ready', () => {
      conn.exec(command, (err, stream) => {
        if (err) {
          console.error('Error executing command:', err);
        }
        stream.on('close', (code: any, signal: any) => {
          console.log(`Command finished with code ${code} and signal ${signal}`);
          conn.end();
        }).on('data', (data: { toString: () => any; }) => {
          console.log('STDOUT:', data.toString());
        }).stderr.on('data', (data) => {
          console.error('STDERR:', data.toString());
        });
      });
    }).on('error', (err) => {
      console.error('SSH connection error:', err);
    }).connect({
      host,
      port: 22,
      username,
      password
    });
  }
  
  
}
