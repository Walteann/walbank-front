import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	AfterViewInit,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
	selector: 'wal-home',
	templateUrl: 'home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
	@ViewChild('myChartBar') myChartBar: ElementRef;
	@ViewChild('myChartDoughnut') myChartDoughnut: ElementRef;



	constructor() {
		Chart.register(...registerables);
	}
	ngAfterViewInit(): void {
		this.buildChartBar();
		this.buildChartDoughnut();
	}

	ngOnInit() {
	}

	private buildChartBar(): void {
		const labels = [
			'Janeiro',
			'Fevereiro',
			'Março',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
		];
		const data = {
			labels: labels,
			datasets: [
				{
					label: 'Ultimos 7 Meses',
					data: [65, 59, 80, 81, 56, 55, 40],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(255, 159, 64, 0.2)',
						'rgba(255, 205, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(201, 203, 207, 0.2)',
					],
					borderColor: [
						'rgb(255, 99, 132)',
						'rgb(255, 159, 64)',
						'rgb(255, 205, 86)',
						'rgb(75, 192, 192)',
						'rgb(54, 162, 235)',
						'rgb(153, 102, 255)',
						'rgb(201, 203, 207)',
					],
					borderWidth: 1,
				},
			],
		};

		const config = {
			type: 'bar',
			data: data,
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
			responsive: true
		} as any;

		const myChart = new Chart(this.myChartBar.nativeElement, config);
	}

	private buildChartDoughnut(): void {
		const data = {
			labels: [
			  'Red',
			  'Blue',
			  'Yellow'
			],
			datasets: [{
			  label: 'My First Dataset',
			  data: [300, 50, 100],
			  backgroundColor: [
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 205, 86)'
			  ],
			  hoverOffset: 4
			}]
		  };

		  const config = {
			type: 'doughnut',
			data: data,
			responsive: true,
    maintainAspectRatio: false
		  } as any;

		  const myChart = new Chart(this.myChartDoughnut.nativeElement, config);
	}
}
