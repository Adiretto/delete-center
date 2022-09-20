stopGame = False

#first task
# while not stopGame:
#     # initiolising the num of boxes and iterations
#     num_boxes = int(input("enter number of boxes: "))
#     iter_n = int(input("enter number of iterations: "))

#     boxes = [0 for i in range(num_boxes)]

#     # number of iterations shouldn't be greater than number of boxes
#     if iter_n <= num_boxes:

#         for i in range(1, iter_n + 1): # iterations

#             for j in range(1, num_boxes + 1): # changing the status of boxes
#                 if j%i == 0:
#                     if boxes[j - 1] == 0:
#                         boxes[j-1] = 1
#                     else:
#                         boxes[j-1] = 0
#         else:
#             print(boxes) # which of the boxes are empty and which ones are not?

#             empty_count = full_count = 0 # find num of full and empty boxes
#             for i in range(num_boxes):
#                 if boxes[i] == 1:
#                     full_count += 1
#                 else:
#                     empty_count += 1
#             else:
#                 print('Number of empty boxes:', empty_count)
#                 print('Number of full boxes:', full_count)

#                 stopRnot = (input("Do you want to do it again? yes or no  - "))
#                 if stopRnot == "no":
#                     stopGame = True
#     else:
#         print("sorry, number of iterations shouldn't be greater than number of boxes")

#second
# while not stopGame:
    





n = int(input(''))
order = []

for i in range(0, 2*n-1, 2):
    order.append(0)
    order.append(1)
else:
    print("!!!", order)
    for i in range(0, n-1):
        order[i+1:2*n-i-1] = reversed(order[i+1:2*n-i-1]) 
    else:
        print(order)