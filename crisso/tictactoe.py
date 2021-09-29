import random
flag=True
var = [" " for i in range(1,11)]
lst=[var[1],var[3],var[5],var[7],var[9]]
lst1=[1,3,5,7,9]


#print(var)
def userinput():
    check=True
    while check:
        a = int(input("Enter the block number: "))
        if var[a] == ' ':
            var[a] = 'X'
            check = False
        else:
            print("please enter valid number")
 



def computer():
    if ' ' in lst:
        random.shuffle(lst1)
        for i in lst1:
            if var[i]==' ':
                print(i)
                var[i]='0'
                break
       
    else:
        print('shadj')
        for i in range(2,10,2):
            if var[i]==' ':
                print(i)
                var[i]='0'
                break
def printBoard():
    print(" _ _ _ _ _ _")
    print("|_"+var[1]+"_|_"+var[2]+"_|_"+var[3]+"_|")
    print("|_"+var[4]+"_|_"+var[5]+"_|_"+var[6]+"_|")
    print("|_"+var[7]+"_|_"+var[8]+"_|_"+var[9]+"_|")
        
printBoard()

def wincheck():
        global flag
        first=var[1]
        second=var[2]
        third=var[3]
        fourth=var[4]
        fifth=var[5]
        sixth=var[6]
        seventh=var[7]
        eighth=var[8]
        ninth=var[9]
        
        if first!=' ':
                 if first==var[2] and var[2]==var[3] or first==var[4] and var[4]==var[7] or first==var[5] and var[5]==var[9]:
                         if first=='X':
                                print("hey! you win")
                         else:
                                print('oops you failed')
                         flag=False
                                
                         return flag
                                
                                
        
        if second!=' ':
                if second==var[5] and var[5]==var[8]:
                        if second=='X':
                                print("you win")
                        else:
                                print("you failed")
                        flag=False
                        return flag
                        
                                
                
       
        if third!=' ':
                if third==var[6] and var[6]==var[9] or third==fifth and fifth==seventh:
                        if third=='X':
                                print("congrats! you win")
                        else:
                                print("you failed")
                        flag=False
                        return flag
                
        
        if fourth!=' ':
                if fourth==var[5] and fifth==sixth:
                        if fourth=='X':
                                print('u win')
                        else:
                                print("sorry bro")
                        flag=False
                        return flag
        if seventh!=' ':
                if seventh==eighth and eighth==ninth:
                        if seventh=='X':
                                
                                print('yoo')
                        else:
                                print("sorry bro")
                        flag=False
                        return flag
                   
while flag:
        userinput()
        computer()
        printBoard()
        wincheck()
        
        
        
        
