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
## if [ ]
## then
## fi
## fi is used to signal end of if statement
if [ "$PETNAME" == "Pop"]
then
    echo " Your pet's name is Pop"
fi

## IF-ELSE
if [ "$PETNAME" == "Pop"]
then
    echo " Your pet's name is Pop"
else
    echo " Your pet's name is not Pop"
fi

## IF-ELIF-Else
if [ "$PETNAME" == "Pop"]
then
    echo " Your pet's name is Pop"
elif [ "$PETNAME" == "Top"]
then
    
else
    echo " Your pet's name is not Pop"
fi
