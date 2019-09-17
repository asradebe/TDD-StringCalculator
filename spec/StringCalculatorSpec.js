describe("Add", function() {
    it("should take up to two numbers, separated by commas, and will return their sum", function() {
        let Calculator = Add("1,2") 
        expect(Calculator).toBe(3);
    });

    it("should take an empty string and it must return 0", function() {
        let Calculator = Add(' ') 
        expect(Calculator).toBe(0);
    });

    it("should be able to handle an unknown amount of numbers", function() {
        let Calculator = Add("7,5,4,9,3,5") 
        expect(Calculator).toBe(33);
    });

    it("should handle any number of arguments", function() {
        let Calculator = Add("1,1,1,1,1,1,1,1,1,1")
        expect(Calculator).toBe(10);
    });

    it("should be able to handle new lines between numbers instead of commas", function() {
        let Calculator = Add("1\n2,3\n7") 
        expect(Calculator).toBe(13);
    });

    it("should Support different delimiters", function() {
        let Calculator = Add("//;\n1;2;9;7") 
        expect(Calculator).toBe(19);
    });
    
    it("should throw an exception error message when there's negative numbers", function() {
        let Calculator = function(){
            Add("-2,-6,-7")
        } 
        expect(Calculator).toThrow('ERROR: negatives are not allowed');
    });
});