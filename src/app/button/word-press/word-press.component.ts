import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RamPrices {
  [key: string]: number;
}

interface MemoryPrices {
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
      '256': 10,
      '512': 20,
      '1000': 30,
      '2000': 40,
    };

    const memoryPrices: MemoryPrices = {
      '1': 5,
      '2': 10,
      '3': 15,
    };

    const ramPrice = ramPrices[this.ramValue];
    const memoryPrice = memoryPrices[this.memoryValue];
    this.price = ramPrice + memoryPrice;
  }

  deploy() {
    const cpu = '1'; // valeur fixe
    const serverUrl = 'http://your-server-url.com'; // l'URL de votre serveur
  
    const command = `sh script_deploy_debian_11.sh --name=test_1 --cpu=${cpu} --ram=${this.ramValue}`;
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
