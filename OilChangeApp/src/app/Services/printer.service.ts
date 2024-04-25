import { Injectable } from '@angular/core';
import {Printer} from '@bcyesil/capacitor-plugin-printer'
import { Vehicle } from '../models/vehicle';
import { VehicleService } from './vehicle.service';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  content: string = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Service Checklist</title>
      <style type="text/css">
        .info-grid {
          border-bottom: 2px solid black;
          padding-bottom: 10px;
        }
        .info-grid td {
          white-space: nowrap;
          width: 100%;
          border: 2px solid black;
          border-radius: 10px;
          padding-left: 10px;
        }
        .info-grid tr {
          width: 100%;
        }
        .info-grid table {
          width: 100%;
          table-layout: fixed;
        }
        .checklists {
          width: 70%;
        }
        .checklists table {
          width: 100%;
          border-bottom: 2px solid black;
        }
        .notes {
          vertical-align: top;

        }
        .notes-and-checklist{
          width: 100%;
          table-layout: fixed;
        }
        .checkbox {
          padding-right: 10px;
          display: block;
          position: relative;
          padding-left: 26px;
          user-select: none;
        }
        .checkmark-failed {
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          border: 2px solid #c9c9c9;
        }
        .checkbox input:checked ~ .checkmark-failed:after {
          display: block;
        }

        .checkbox div {
          text-align: start;
          padding-left: 10px;
        }

        .checkmark-failed:after {
        content:'X';
        position: absolute;
        left: 4px;
        top: 2px;
        display: none;
        }
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          border: 2px solid #c9c9c9;
        }
        .checkbox input:checked ~ .checkmark:after {
          display: block;
        }

        .checkmark:after {
        content:'✓';
        position: absolute;
        left: 4px;
        display: none;
        } 
        .checkbox input{
          height: 0;
          width: 0;
        }
        .input-area{
          min-width: 60px;
          border-bottom: 2px solid black;
          text-align: center;
        }

        td div {
          white-space: nowrap;
          text-align: center;
        }
      </style>
    </head>
    <header style="text-align: center;">
        <h1>Service Check List</h1>
    </header>
    <body>
      <div class="info-grid">
        <table>
            <tr>
                <td>{{HAT-TYPE}}: {{HAT-NUMBER}}</td>
                <td>License #: {{LICENSE}}</td>
                <td>Date: {{DATE}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <td>PROD Date: {{PROD}}</td>
                <td>Year: {{YEAR}}</td>
                <td>Make: {{MAKE}}</td>
                <td>Model: {{MODEL}}</td>
                <td>Mileage: {{MILES}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <td>Drive Type: {{DRIVE}}</td>
                <td>Engine Size: {{SIZE}}</td>
                <td>Transmission: {{TRANSMISSION}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <td>VIN: {{VIN}}</td>
            </tr>
        </table>
      </div>
      <div>
        <table class="notes-and-checklist">
          <tr>
              <td class="checklists">
                <table>
                  <tr>
                      <td class="checkbox">
                        <input type="checkbox" checked>
                        <span class="checkmark-failed"></span>
                        Engine Oil
                      </td>
                      <td>Type:</td>
                      <td class="input-area"></td>
                      <td>QTs:</td>
                      <td class="input-area">{{OIL-QT}}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td class="checkbox">
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                      Filter Service
                    </td>
                    <td>
                      <div>Oil Filter #:</div>
                      <div class="input-area">{{OIL-FILTER}}</div>
                    </td>
                    <td>
                      <div>Air Filter #:</div>
                      <div class="input-area">{{AIR-FILTER}}</div>
                    </td>
                    <td>
                      <div>Fuel Filter #:</div>
                      <div class="input-area">{{FUEL-FILTER}}</div>
                    </td>
                    <td>
                      <div>Cabin Air Filter #:</div>
                      <div class="input-area">{{CABIN-FILTER}}</div>
                    </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td class="checkbox">
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                      Washer Fluid
                    </td>
                    <td>Quarts:</td>
                    <td class="input-area">{{WASH-QUANTITY}}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td class="checkbox">
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                      Transmission
                    </td>
                    <td>Type: {{TRANSMISSION}}</td>
                    <td>QTs:</td>
                    <td class="input-area">{{TRAN-QT}}</td>
                    <td>PTs:</td>
                    <td class="input-area">{{TRAN-PT}}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td class="checkbox">
                      <div>Differential</div>
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </td>
                    <td>
                      <div>Transfer?:</div>
                      <div class="input-area">{{ADJ}}</div>
                    </td>
                    <td>
                      <div>Front?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Rear?:</div>
                      <div class="input-area">{{CHFL}}</div>
                    </td>
                    <td>QTs:</td>
                    <td class="input-area">{{DIF-QT}}</td>
                    <td>PTs:</td>
                    <td class="input-area">{{DIF-PT}}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td class="checkbox">
                      <div>Breaks</div>
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </td>
                    <td>
                      <div>Adjusted?:</div>
                      <div class="input-area">{{ADJ}}</div>
                    </td>
                    <td>
                      <div>Relined?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Change FL?:</div>
                      <div class="input-area">{{CHFL}}</div>
                    </td>
                    <td>
                      <div>Add FL?:</div>
                      <div class="input-area">{{ADDFL}}</div>
                    </td>
                    <td>
                      <div>F:</div>
                      <div class="input-area">{{FBL}}%</div>
                    </td>
                    <td>
                      <div>R:</div>
                      <div class="input-area">{{RBL}}?</div>
                    </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td class="checkbox">
                      <div>Wheel Service</div>
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </td>
                    <td>
                      <div>Repack Bearings?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Align?:</div>
                      <div class="input-area">{{CHFL}}</div>
                    </td>
                    <td>
                      <div>Balance?:</div>
                      <div class="input-area">{{ADDFL}}</div>
                    </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td class="checkbox">
                      <div>Shock Absorbers</div>
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </td>
                    <td>
                      <div>Original Equip?:</div>
                      <div class="input-area">{{ADJ}}</div>
                    </td>
                    <td>
                      <div>Leaks?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Needs Repair?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td class="checkbox">
                      <div>Cooling System</div>
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </td>
                    <td>
                      <div>Coolant?:</div>
                      <div class="input-area">{{ADJ}}</div>
                    </td>
                    <td>
                      <div>Clean?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Dirty?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>Protection Level:</td>
                    <td class="input-area">{{BALANCE}}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td class="checkbox">
                      <div>Battery</div>
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </td>
                    <td>
                      <div>Fill?:</div>
                      <div class="input-area">{{ADJ}}</div>
                    </td>
                    <td>
                      <div>Sealed?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Service?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Charge?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Replace?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td class="checkbox">
                      <div>Power Steering</div>
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </td>
                    <td>
                      <div>Add Fluid?:</div>
                      <div class="input-area">{{ADJ}}</div>
                    </td>
                    <td>
                      <div>Clean?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Needs Service?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td class="checkbox">
                      <div>Lights</div>
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </td>
                    <td>
                      <div>Stop:</div>
                      <div class="input-area">{{ADJ}}</div>
                    </td>
                    <td>
                      <div>H-Stop:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Tail:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Back Up:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <div>Marker:</div>
                      <div class="input-area">{{REL}}</div>
                    </td><td>
                      <div>Turn:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>License:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Headlight:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td class="checkbox">
                      <div>Tires</div>
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </td>
                    <td>
                      <div>Balance?:</div>
                      <div class="input-area">{{ADJ}}</div>
                    </td>
                    <td>
                      <div>Rotation?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>Repair?:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>PSI Front:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                    <td>
                      <div>PSI Back:</div>
                      <div class="input-area">{{REL}}</div>
                    </td>
                  </tr>
                </table>
              </td>
              <td class="notes">
                <ul>
                  <li>This is a test note to see what happens when a note item gets so long that it wraps around, hopefully it doesn't look bad.</li>
                  <li>This is a second test note that doesn't have to be as long as the first</li>
                </ul>
              </td>
          </tr>
        </table>
      </div>
    </body>
    <footer>
      <h1 style="width: 100; border-bottom: 2px solid black;">
        Completed By:
      </h1>
    </footer>
  </html>
  `

  constructor(public vehicle: VehicleService) { }

  async testPrint(){
    let printContent: string = this.setPrintContent();
    console.log("Print Content:", printContent)
    Printer.print({content: printContent});
  }

  setPrintContent(): string{
    let date: Date = new Date();
    
    let c = this.content;
    if (this.vehicle.vehicle === undefined) {return ""}
    let veh: Vehicle = this.vehicle.vehicle;
    c = c.replace("{{HAT-TYPE}}", "WO")
    c = c.replace("{{HAT-NUMBER}}", "Waiting")
    c = c.replace("{{DATE}}", date.toDateString())
    c = c.replace("{{YEAR}}", veh.year);
    c = c.replace("{{MAKE}}", veh.make);
    c = c.replace("{{MODEL}}", veh.model + " " + veh.trim);
    c = c.replace("{{LICENSE}}", "(" + veh.state + ")" + veh.license);
    c = c.replace("{{PROD}}", "05/04");
    c = c.replace("{{DRIVE}}", veh.drive);
    c = c.replace("{{MILES}}", veh.miles);
    c = c.replace("{{VIN}}", veh.vin.toUpperCase());
    c = c.replace("{{SIZE}}", veh.size);
    c = c.replace("{{TRANSMISSION}}", "STAND");
    console.log(c);

    return c
  }
}
