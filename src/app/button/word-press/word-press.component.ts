import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    const serverUrl = '192.168.120.191'; // l'URL de votre serveur
  
    const command = `sh script_deploy_debian_11.sh --name=test_1 --cpu=${this.memoryValue} --ram=${this.ramValue}`;
    const requestBody = { command };
  
    this.http.post(serverUrl, requestBody).subscribe(
      (response) => {
        console.log('Command sent successfully:', response);
      },
      (error) => {
        console.error('Error sending command:', error);
      }
    );
  }
}
