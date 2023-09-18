/*operator:
 (+) Addition

Addition (+) operator is overloaded on two distinct operators Addition & Concatenation

+ used in Addition & Concatenation

1. Evaluate (two operands)
2. test(It is Addition or Substraction)
3. "1"+2 (if first is a string & second one is numeric then that second also be considered as a String)
4. BigInt(12344 + "1") Throws an error of TypeError
5. (1234 + 1) Will perform addition

1. ("1" + 2) - If 1st = string
                  2nd = numeric
              considered, 2nd = string 
 Result in concatenation.
2. (1234 + "1") - If 1st =BigInt number
                     2nd = string
        Result as: TypeError 

3. (1234 + 1)   If 1st = BigInt
                   2nd = numeric
          considered as: BigInt
          Result in: Addition 
          __________________________________________________
          
          String concat = template literals (False)
          Path: Evaluate-->test-->calls to valueOf()

          String concat/template literals: Has toPrimitive method
          concat() calls to valueOf()
          templateLiterals calls to string""

          diff string & primitive operation called as temporal
          for which valueOf() mwthod throws.
          */
         
