import { describe,expect,it } from "vitest";

import { 
  handleDigitClick,
  handleDecimalClick,
  handleClearClick,
  performCalculation,
} from "./calculate.component";

describe('Calculator', () => {
  
  describe('handleDigitClick', () => {
    it('Eklenen değer handleDigitClick fonksiyonu tarafından string olarak alınmalı ve displayValue değişkenine string olarak eklenmelidir.', () => {
      let displayValue = '123';
      const setDisplayValue = (value) =>{
        displayValue = value;
      }
      handleDigitClick(0,displayValue,setDisplayValue);
      expect(displayValue).toBe('1230')

      //Burada fonksiyonumuda test ettiğimiz özellik ; eğer display değerlerimize artı bir değer eklendiğinde string bir biçimde display değerimizin yanına geçeceğini kontrol ediyoruz.
    });
    it('Eğer displayValue değeri 0 ise görüntülenen değer tıklanan değerle güncellenmelidir.', () => {
      let displayValue = '0';
      const setDisplayValue =(value) =>{
        displayValue=value;
      }
      handleDigitClick(5,displayValue,setDisplayValue);
      expect(displayValue).toBe('5')

      // Burada fonksiyonumuzda test ettiğimiz özellik ; eğer display değerimiz sıfırsa ve farklı bir değer giriliyorsa, display değerimiz girilen değer olarak gözükmesini kontrol ediyoruz.
    });    
  });
  describe('handleDecimalClick', () => {
    it('Nokta operatörü aynı displayValue değeri içerisinde iki kere kullanılmamalıdır.', () => {
      let displayValue = '5';
      let updatedDisplayValue='';
      const setDisplayValue = (value) =>{
        updatedDisplayValue = value;
      }
      handleDecimalClick(displayValue,setDisplayValue)
      expect(updatedDisplayValue).not.toBe('5..')

      // Burada fonksiyonumuzda test ettiğimiz özellik ; eğer display değerimiz ondalık bir biçimde bulunuyorsa, ikinci bir nokta operatörünü almamasını kontrol ediyoruz.

    });
    it('Eğer displayValue değerimizde nokta operatörü yoksa, nokta operatörü eklenmelidir.', () => {
      let displayValue='5';
      let updatedDisplayValue ='';

      const setDisplayValue = (value)=>{
        updatedDisplayValue=value;
      }
      handleDecimalClick(displayValue,setDisplayValue);
      expect(updatedDisplayValue).toBe('5.');
    });

    // Burada fonksiyonumuzda test ettiğimiz özellik ; eğer display değerimiz nokta operatörü yoksa nokta operatörünü alabileceğini kontrol ediyoruz.
    
    
  });
  describe('performCalculation', () => {
    it('Operatörler hesaplamaları doğru yapmalıdır.', () => {
      expect(performCalculation('10','5','+')).not.toBe('20');
      expect(performCalculation('10','5','-')).toBe('5');
      expect(performCalculation('10','5','*')).toBe('50');
      expect(performCalculation('10','5','/')).toBe('2');
    });

    // Burada fonksiyonumuzda test ettiğimiz özellik ; operatörlerin doğru sonuç getirdiğini kontrol ediyoruz. 
  });
  describe('handleClearClick ', () => {
    it('displayValue değerimiz 0 ise diğer değerler, operatörde dahil boş olmalıdır.', () => {
      let displayValue = '15';
      let firstOperand = '10';
      let operator = '+';
      const setDisplayValue = (value)=>{
        displayValue = value
      }
      const setFirstOperand = (value)=>{
        firstOperand = value
      }
      const setOperator = (value)=>{
        operator = value
      }
      handleClearClick(setDisplayValue,setFirstOperand,setOperator)
    });
    
  });
  
  
  
  
});
