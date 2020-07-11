const expect = require('chai').expect;
const algorithms = require('./algorithms-basic');

describe('algorithms', () => {
  describe('convert C To F', () => {
    it('should convert C to F', () => {
      expect(algorithms.convertToF(30)).to.be.equal(86);
    });
  });

  describe('factorize', () => {
    it('should factorize a number', () => {
      expect(algorithms.factorize(5)).to.be.equal(120);
    });
  });

  describe('reverseString', () => {
    it('should reverse the given string', () => {
      expect(algorithms.reverseString('Hallo')).to.be.equal('ollaH');
    });
  });

  describe('findLongestWordLength', () => {
    it('should find longest word ', () => {
      expect(
        algorithms.findLongestWordLength('The quick brown fox jumped')
      ).to.be.equal('jumped');
    });
  });

  describe('largestOfFour', () => {
    it('should return largest numbers of each array ', () => {
      expect(
        algorithms.largestOfFour([
          [5, 1],
          [-72, 2],
        ])
      ).to.be.deep.equal([5, 2]);
    });
  });

  describe('confirmEnding', () => {
    it('should confirm if the last letter of a sting is matching the 2nd arg', () => {
      expect(algorithms.confirmEnding('World', 'd')).to.be.true;
    });
  });

  describe('repeatStringNumTimes', () => {
    it('should repeat a string as much times specified in the 2nd arg', () => {
      expect(algorithms.repeatStringNumTimes('abc', 2)).to.be.equal('abcabc');
    });
  });

  describe('truncateString', () => {
    it('should truncate a string after a value specified in the 2nd arg and should be ended with ...', () => {
      expect(algorithms.truncateString('abc', 2)).to.be.equal('ab...');
    });
  });

  describe('findElement', () => {
    it('should Returns first that passes a truth test by the function (2nd arg)', () => {
      expect(
        algorithms.findElement([1, 2, 3, 4], (num) => num % 2 === 0)
      ).to.be.equal(2);
    });
  });

  describe('booWho', () => {
    it('should Check if a value is classified as a boolean. Return true or false.', () => {
      expect(algorithms.booWho(null)).to.be.false;
    });
    it('should Check if a value is classified as a boolean. Return true or false.', () => {
      expect(algorithms.booWho(false)).to.be.true;
    });
  });

  describe('titleCase', () => {
    it('should capitalize first letter of each word', () => {
      expect(algorithms.titleCase('my name is rabie')).to.be.equal(
        'My Name Is Rabie'
      );
    });
  });
});
