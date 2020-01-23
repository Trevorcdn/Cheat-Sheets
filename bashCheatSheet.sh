#! /bin/bash

## ECHO COMMAND. Prints on console
echo Hello World!

## VARIABLES are uppercase by convention and can contain 
## Letters, numbers, underscores
NAME = "Trevor"
# echo "My name is $NAME" || echo "My name is ${NAME}"

## USER INPUT - whatever they enter will be assign to PETNAME
read -p "Enter your pet's name: " PETNAME

#Conditionals - SIMPLE IF STATEMENT
if [ "$PETNAME" == "Pop"]
then
    echo " Your pet's name is Pop"
fi
## fi is used to signal end of if statement

## IF-ELSE
if [ "$PETNAME" == "Pop"]
then
    echo " Your pet's name is Pop"
else
    echo " Your pet's name is not Pop"
fi

## IF-ELIF-ELSE
if [ "$PETNAME" == "Pop"]
then
    echo " Your pet's name is Pop"
elif [ "$PETNAME" == "Top"]
then
    echo " Your pet's name is Top"
else
    echo " Your pet's name is not Pop nor Top"
fi

########
# val1 -eq val2 Returns true if the values are equal
# val1 -ne val2 Returns true if the values ARE NOT equal
# val1 -gt val2 Returns true if val1 is greater than val2
# val1 -ge val2 Returns true if val1 is greater than or equal to val2
# val1 -lt val2 Returns true if val1 is less than val2
# val1 -le val2 Returns true if val1 is lessthan or equal to val2
########

#COMPARISON
NUM1 = 31
NUM2 = 5
if ["$NUM1" - gt "$NUM2"]
then
    echo "$NUM1 is greater than $NUM2"
else
    echo "$NUM2 is greater than $NUM1"
fi


## FILE CONDITIONS

########
# -d file   True if the file is a directory
# -e file   True if the file exists (note that this is not particularly portable, thus -f is generally used)
# -f file   True if the provided string is a file
# -g file   True if the group id is set on a file
# -r file   True if the file is readable
# -s file   True if the file has a non-zero size
# -u    True if the user id is set on a file
# -w    True if the file is writable
# -x    True if the file is an executable
########

FILE = "test.txt"
if [ -f "$FILE"] #checking if FILE is a file with -f
then
    echo "$FILE is a file"
else
    echo "$FILE is NOT a file"
fi


## CASE STATEMENT
read -p "Are you a dog person or a cat person?" ANSWER
case "$Answer" in
    [dD] | [dD][oO][gG]) #kinda like a regex expression for dog,Dog,DOg, DoG etc
        echo "You are a dog person"
        ;;
    [cC] | [cC][aA][tT])
        echo "You are a cat person"
        ;;
    *)
    echo "Please enter dog or cat"
    ;;
esac

