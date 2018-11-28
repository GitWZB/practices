//生成一个随机数:
function randomNumber() {
	return Math.round(Math.random() * 10000);
};

// 生成一个随机的数组；
function randomArray(m) {
	var str = [];
	//	var str = new Array();
	for (var i = 0; i < m; i++) {
		str[i] = Math.floor(Math.random() * 10000)
			//		str=str.concat(Math.floor(Math.random()*10000));

	}
	return str;
};

console.log(randomArray(10));

//1.随机生成一个五位以内的数，然后输出该数共有多少位，每位分别是什么
document.write('<br />1.随机生成一个五位以内的数，然后输出该数共有多少位，每位分别是什么<br />');

function innerFiveDigital() {
	var num = parseInt(Math.random() * 10000);
	// var digitalS=parseInt(num/1000);
	// var digitalH=parseInt((num-(digitalS*1000))/100);
	// var digitalT=parseInt((num-(digitalS*1000)-(digitalH*100))/10);
	// var digitalO=parseInt((num-(digitalS*1000)-(digitalH*100)-digitalT*10)/1);
	// var numberDigital=[digitalS,digitalH,digitalT,digitalO];
	// document.write(num+' '+numberDigital);
	document.write(num + '<br />');
	str = new String(num);
	document.write(str.length + '位数<br />每位数分别为');
	for (var i = 0; i < str.length; i++) {
		document.write(str[i] + '， ');
	}
}
innerFiveDigital();
document.write('<br />')

//2.山上有一口缸可以装50升水，现在有15升水。老和尚叫小和尚下山挑水，每次可以挑5升。问：小和尚要挑几次水才可以把水缸挑满？通过编程解决这个问题。
document.write('<br />2.挑水问题<br />');

function getWater(volumn, remain, everytime) {
	var times = Math.ceil((volumn - remain) / everytime);
	return times;
}
document.write('需要挑' + getWater(50, 15, 5) + '次')
document.write('<br />')

//3.有一个从小到大排好序的数组。现输入一个数，要求按原来的规律将它插入数组中。
// 方法一：
document.write('<br />3.有一个从小到大排好序的数组。现输入一个数，要求按原来的规律将它插入数组中。<br />');
document.write('方法一：<br />')

function insertNumber1(newNum, fixedArray) {
	var len = fixedArray.length;
	document.write('原数组是' + '[' + fixedArray + ']<br />');
	document.write('现在要插入的数是' + newNum + '<br />');

	for (var i = 0; i < len; i++) {
		if (newNum <= fixedArray[i]) {
			fixedArray.splice(i, 0, newNum);
			return fixedArray;
		}
	}
	if (len === fixedArray.length) {
		fixedArray.push(newNum);
	}
	return fixedArray;
}

document.write(insertNumber1(randomNumber(), bubble(randomArray(10))));

// 方法二
document.write('<br />方法二：<br />')

function insertNumber2(num, fixedArray) {
	document.write('原数组是' + '[' + fixedArray + ']<br />');
	document.write('现在要插入的数是' + num + '<br />');
	var newArray = fixedArray.concat(num);
	return newArray.sort(
		function(num1, num2) {
			if (num1 > num2) {
				return 1;
			}
		}
	)
}
document.write(insertNumber2(randomNumber(), bubble(randomArray(10))));

document.write('<br />')

//4.自定义一个对象，该对象存储一个学生的信息，该对象包含学号、身份证、年龄、性别、所学专业等属性信息，同时该对象包含一个自我介绍的方法，用来输出该对象的所有信息。
document.write('<br />4.自定义一个对象，该对象存储一个学生的信息<br />');
var student = {
	nameOfMe: '张三',
	studentNumber: 'SH15010000',
	idNumber: '210032123244232321',
	age: 25,
	sex: 'male',
	major: '计算机科学',
	introduceMyself: function() {
		document.write('姓名：' + this.nameOfMe + ';<br />' + '学号：' + this.studentNumber + ';<br />' + '身份证号：' + this.idNumber + ';<br />' + '年龄：' + this.age + ';<br />' + '性别：' + this.sex + ';<br />' + '所学专业：' + this.major + ';');
	}
}
student.introduceMyself();

document.write('<br />')

//5.随机从一组人员名单中，抽出一个人。
document.write('<br />5.随机从一组人员名单中，抽出一个人。<br />');
var studentName = ['罗倩', '樊国韬', '丁伟', '曹平宇', '张国玺', '黄永辉', '巨雪梅', '陈琼', '柯顺天', '李鸿德', '周强强'];

function randomNum() {
	var randomN = Math.round(Math.random() * 10 + 1);
	return randomN;
}

function randomStudentName() {
	document.write(studentName[(randomNum() - 1)]);
}
randomStudentName();

document.write('<br />')

//6.一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，求它在第5次落地时，共经过多少米？再反弹弹起多少米？
document.write('<br />6.一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，求它在第5次落地时，共经过多少米？再反弹弹起多少米？<br />');
// 方法一
document.write('方法一<br />');

function sumHeight1(initialHeight, counter) {
	var everyHeight = [initialHeight / 2];
	var sumH = initialHeight;

	if (counter === 1) {
		sumH = initialHeight;
	} else {
		for (var i = 0; i < (counter - 1); i++) {
			everyHeight[i + 1] = everyHeight[i] / 2;
			sumH += everyHeight[i] * 2;
		}
	}

	document.write('一球从' + initialHeight + '米高度自由落下，球在第' + counter + '次落地时，共经过' + sumH + '米；再反弹弹起' + everyHeight[counter - 1] + '米<br />');
}

sumHeight1(100, 5);

// 方法二
document.write('方法二<br />');

function sumHeight2(initialHeight, counter) {
	var everyHeight = initialHeight;
	var temp = initialHeight;
	var sumH = initialHeight;

	for (var i = 1; i < counter; i++) {
		temp = everyHeight / 2;
		sumH += temp * 2;
		everyHeight = temp;

	}

	document.write('一球从' + initialHeight + '米高度自由落下，球在第' + counter + '次落地时，共经过' + sumH + '米；再反弹弹起' + everyHeight / 2 + '米');
}

sumHeight2(100, 5);

document.write('<br />')

//7.求一个数n的阶乘(递归实现)
document.write('<br />7.求一个数n的阶乘(递归实现)<br />');

function factorial(n) {
	if (n === 1) {
		return 1;
	}
	return n * factorial(n - 1);

}
var factorialNumber = Math.round(Math.random() * 99 + 1);
document.write(factorialNumber + '的阶乘是' + factorial(factorialNumber));

document.write('<br />')

//8.生成13位条形码Ean-13码规则：第十三位数字是前十二位数字经过计算得到的校验码。例如：690123456789	第13位计算其校验码的过程为：
// @前十二位的奇数位和6+0+2+4+6+8=26 
// @前十二位的偶数位和9+1+3+5+7+9=34
// @将奇数和与偶数和的三倍相加26+34*3=128@取结果的个位数：128的个位数为8
// @用10减去这个个位数10-8=2;
// 所以校验码为2（注：如果取结果的个位数为0，那么校验码不是（10-0=10），而是0）实现方法ean13（）计算验证码，输入12位条码，返回带验证码的条码。
// 例如：输入：692223361219输出：6922233612192
document.write('<br />8.条形码<br />');
//方法一:
document.write('方法一:<br />！！！此种方法有缺陷，随机出来的12位验证码的第一位取不到零！！！！<br />')

function calculateBarCode(inputNum12) {
	var inputNum12Copy = inputNum12;
	document.write('旧的12位的条形码是：' + inputNum12 + '<br/>');
	var sumEvenNum = 0;
	var sumOddNum = 0;
	var digitU;
	var digit = [];
	for (var i = 100000000000; i >= 1; i /= 10) {
		digit.push(Math.floor(inputNum12Copy / i));
		inputNum12Copy = inputNum12Copy % i;
	}
	document.write(digit + '<br />');

	for (var i = 0; i < 12; i++) {
		if (i % 2 === 0) {
			sumOddNum += digit[i];
		} else {
			sumEvenNum += digit[i];
		}
	}
	document.write('奇数和是' + sumOddNum + '<br/>');
	document.write('偶数和是' + sumEvenNum + '<br/>');
	var sumAll = sumEvenNum * 3 + sumOddNum;
	document.write('奇数和与偶数和的三倍等于' + sumAll + '<br/>');

	var strThe13th = (10 - sumAll % 10) % 10;

	document.write('第十三位数是' + strThe13th + '<br/>');
	return inputNum12 = inputNum12 * 10 + strThe13th;
}

function randomBarCode12() {
	var random12 = Math.floor(Math.random() * 900000000000) + 100000000000;
	return random12;
}

document.write('新的13位的条形码是：' + calculateBarCode(randomBarCode12()));

//方法二:
document.write('<br />方法二:<br />（此种方法比较好）<br />')

function calculateBarCode2(inputStr12) {
	var str12 = inputStr12
	document.write('旧的12位的条形码是：' + str12 + '<br/>');
	var sumEvenNum = 0;
	var sumOddNum = 0;
	var digitU;
	// for(var j=0;j<12;j++){
	// 	document.write(str12[j]+'<br/>');
	// }
	for (var i = 0; i < 12; i++) {
		if (i % 2 === 0) {
			sumOddNum += parseInt(str12[i]);
		} else {
			sumEvenNum += parseInt(str12[i]);
		}
	}
	document.write('奇数和是' + sumOddNum + '<br/>');
	document.write('偶数和是' + sumEvenNum + '<br/>');
	var sumAll = sumEvenNum * 3 + sumOddNum;
	document.write('奇数和与偶数和的三倍等于' + sumAll + '<br/>');

	var strSumAll = new String(sumAll);
	// document.write(strSumAll+'<br/>');

	digitU = parseInt(strSumAll[strSumAll.length - 1]);
	// document.write(digitU+'<br/>');
	var strThe13th = 0;
	if (digitU === 0) {
		strThe13th = 0;
	} else {
		strThe13th = 10 - digitU;
	}
	document.write('第十三位数是' + strThe13th + '<br/>');
	var str13 = str12;
	str13 = str12 + strThe13th;
	return str13;

}

function randomBarCode12Method2() {
	var str = [Math.floor(Math.random() * 10)];
	for (var i = 0; i < 11; i++) {

		str = str.concat(Math.floor(Math.random() * 10));

	}
	return str.join('');
}

document.write('新的13位的条形码是：' + calculateBarCode2(randomBarCode12Method2()));

document.write('<br />')

//9.猴子吃桃问题：猴子第一天摘下若干个桃子，当即吃了一半，还不瘾，又多吃了一个第二天早上又将剩下的桃子吃掉一半，又多吃了一个。以后每天早上都吃了前一天剩下的一半零一个。到第10天早上想再吃时，见只剩下一个桃子了。求第一天共摘了多少。程序分析：采取逆向思维的方法，从后往前推断。
document.write('<br />9.猴子吃桃问题<br />');

function eatPeach(n) {
	if (n === 1) {
		return 1;
	} else {
		return (eatPeach(n - 1) + 1) * 2;
	}
}

document.write(eatPeach(10));

document.write('<br />')

//冒泡排序法
document.write('<br />10.冒泡排序法');

function bubble(array) { //冒泡排序法
	var len = array.length;
	var temp;
	for (var i = 0; i < len - 1; i++) {
		for (var j = 0; j < len - i; j++) {
			if (array[j] > array[j + 1]) {
				temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}
// 选择排序法
document.write('<br />11.选择排序法<br />');

function selection(array) {
	var len = array.length;
	var temp;
	for (var i = 0; i < len - 1; i++) {
		for (var j = i + 1; j < len - 1; j++) {
			if (array[i] > array[j]) {
				temp = array[j];
				array[j] = array[i];
				array[i] = temp;
			}
		}
	}
	return array;
}

var randomArrayForBubble = randomArray(10);
document.write('<br />随机产生一个数组：<br />' + randomArrayForBubble + '<br />');
document.write('用冒泡法排好序的数组是：<br />' + bubble(randomArrayForBubble));
document.write('<br />')

var newArr = bubble(randomArray(20));

var randomArrayForSlection = randomArray(10);
document.write('随机产生一个数组：<br />' + randomArrayForSlection);
document.write('<br />用选择法排好序的数组是：<br />' + bubble(randomArrayForSlection) + '<br /><br />');

document.write('<br />')