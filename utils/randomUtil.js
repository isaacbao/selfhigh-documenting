'use strict'

/**
 * 生成随机数所用的工具
 */
const assert = require('assert');
const BASE_CHAR = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-'
const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

/**
 * [生成一个随机整数]
 * @param  {[int]} max [整数的最大值]
 * @return {[int]}     [一个随机整数]
 */
exports.randomInt = function (max) {
  let random = Math.random()
  let resultDouble = random * max
  let resultInt = parseInt(resultDouble)
  return resultInt
}

/**
 * [生成一个随机字符串]
 * @param  {[int]} length [字符串长度]
 * @return {[String]}        [一个随机字符串，由这些字符组成：0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_- ]
 */
exports.getStringBase = function (length) {
  let stringBuffer = ''
  for (let i = 0; i < length; i++) {
    stringBuffer += BASE_CHAR.charAt(exports.randomInt(BASE_CHAR.length))
  }
  return stringBuffer
}

/**
 * [生成一个随机字符串]
 * @param  {[int]} length [字符串长度]
 * @param  {[String]} chars [构成字符串的字符]
 * @return {[String]}        [一个随机字符串，由这些chars中的字符组成]
 */
exports.getString = function (length, chars) {
  assert(Object.prototype.toString.call(chars)
    .indexOf('String') != -1, '字符串应该由字符串构成')

  var stringBuffer = ''
  for (var i = 0; i < length; i++) {
    stringBuffer += chars.charAt(randomInt(chars.length))
  }
  return stringBuffer

}

/**
 * [生成一个随机英文字符串]
 * @param  {[int]} length [字符串长度]
 * @return {[String]}        [一个随机字符串，仅由英文大小写组成 ]
 */
exports.getEnglishString = function (length) {
  let stringBuffer = ''
  for (let i = 0; i < length; i++) {
    stringBuffer += ALPHABET.charAt(exports.randomInt(ALPHABET.length))
  }
  return stringBuffer
}
