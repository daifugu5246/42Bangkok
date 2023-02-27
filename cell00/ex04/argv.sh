#!/bin/bash
i=1;
if  [ "$#" -eq '0' ]
then
	echo "No arguments supplied";
else
	for arg in  "$@"
	do
		if [[ "$i" -eq '4' ]]
		then
			break;
		fi
		echo "$arg";
		i=$((i+1));
	done
fi
 




