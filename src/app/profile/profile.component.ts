import { Component, ElementRef, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  @ViewChild('content', { static: false }) content!: ElementRef;

  public now = new Date();
  sdata = this.now.toLocaleDateString();
  timeData = this.now.getHours() + ' : ' + this.now.getMinutes();

  constructor() {}

  generatePDF() {
    const data = document.getElementById('table');

    html2canvas(data!).then(canvas => {
      // Захоплюємо зображення з вмісту HTML-елемента
      const imgData = canvas.toDataURL('image/png');

      // Розмір PDF документу, можна налаштувати за потребою
      const pdf = new jspdf.jsPDF('p', 'mm', 'a4');

      // Визначення відступів
      const marginX = 10; // Відступи зліва та справа (у міліметрах)
      const marginY = 10; // Відступи зверху та знизу (у міліметрах)

      // Додаємо зображення на PDF з відступами
      pdf.addImage(imgData, 'PNG', marginX, marginY, 210 - 2 * marginX, 297 - 2 * marginY);

      // Завантаження PDF-документа зі зображенням таблиці та відступами
      pdf.save('report.pdf');
    });
  }
}
