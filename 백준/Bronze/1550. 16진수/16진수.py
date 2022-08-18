num = input()
sum = 0

numArr = list(num)
# print(numArr)
lnNum = len(numArr)

index=lnNum-1
for i in range(0,lnNum):
    if index>0:
        # print("index:",index)
        # print("i:",i)
        if numArr[i]=='A' : sum += 10*(16**index);
        elif numArr[i]=='B' : sum += 11*(16**index);
        elif numArr[i]=='C' : sum += 12*(16**index);
        elif numArr[i]=='D' : sum += 13*(16**index);
        elif numArr[i]=='E' : sum += 14*(16**index);
        elif numArr[i]=='F' : sum += 15*(16**index);
        else : sum +=int(numArr[i])*(16**index);
        # print(sum)

    if index==0:
        # print("index:",index)
        # print("i:",i)
        if numArr[i]=='A' : sum += 10;
        elif numArr[i]=='B' : sum += 11;
        elif numArr[i]=='C' : sum += 12;
        elif numArr[i]=='D' : sum += 13;
        elif numArr[i]=='E' : sum += 14;
        elif numArr[i]=='F' : sum += 15;
        else : sum +=int(numArr[i]);
        # print(sum)
    index=index-1;

print(sum)