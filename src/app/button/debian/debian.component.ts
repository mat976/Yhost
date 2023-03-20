import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RamPrices {
  [key: string]: number;
}

interface CpuPrices {
  [key: string]: number;
}

@Component({
  selector: 'app-debian',
  templateUrl: './debian.component.html',
  styleUrls: ['./debian.component.css']
})
export class DebianComponent {
  ramValue: string = '';
  cpuValue: string = '';
  price: number = 0;

  constructor(private http: HttpClient) {}

  calculatePrice() {
    const ramPrices: RamPrices = {
      '256': 15,
      '512': 25,
      '1000': 35,
      '2000': 45,
    };

    const CpuPrices: CpuPrices = {
      '1': 5,
      '2': 10,
      '3': 15,
    };

    const ramPrice = ramPrices[this.ramValue];
    const CpuPrice = CpuPrices[this.cpuValue];
    this.price = ramPrice + CpuPrice;
  }

  deploy() {
    const ram = (document.querySelector('input[name="W_ram"]:checked') as HTMLInputElement)?.value;
    if (!ram) {
      console.log('Please select a RAM value');
      return;
    }
    
    const cpu = '1'; // valeur fixe
    const serverUrl = 'http://your-server-url.com'; // l'URL de votre serveur
  
    const command = `sh script_deploy_debian_11.sh --name=test_1 --cpu=${cpu} --ram=${ram}`;
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
