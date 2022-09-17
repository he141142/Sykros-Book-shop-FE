import React from 'react';
import { API_ENDPOINT } from './optional.cfg';
class GetCfg {
        OPTIONAL_CONFIG = {
            API_ENDPOINT
        }
}



export default GetCfg 

/**
 * 
 * -The Problem is not the upload file size.
 * -Actual Problem: Checksum is incorrect, When download API execute, It will caculate checksum of file then compare with result in database.
 * Modify "Upload Feature" in CheckSum Section( caculate md5 and crc32 scope) -> Caulate md5 and crc32 in the right way And the download problem will be fixed
 * 
 */