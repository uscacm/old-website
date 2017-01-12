#ifndef NETWORK_UTILITY_H_
#define NETWORK_UTILITY_H_

#define SERVER_MAILBOX 0
#define CLIENT_MAILBOX 1

#define CREATE_LOCK 1
#define ACQUIRE_LOCK 2
#define RELEASE_LOCK 3
#define DESTROY_LOCK 4
#define CREATE_CV 5
#define WAIT_CV 6
#define SIGNAL_CV 7
#define BROADCAST_CV 8
#define DESTROY_CV 9
#define CREATE_MV 10
#define SET_MV 11
#define GET_MV 12
#define DESTROY_MV 13
#define WAIT_CV_LOCK 14
#define SIGNAL_CV_LOCK 15
#define BROADCAST_CV_LOCK 16

#define SERVER_REQUEST 1
#define SERVER_RESPONSE 2

#define NO 0
#define YES 1

#define FAIL 0
#define SUCCESS 1

#endif
