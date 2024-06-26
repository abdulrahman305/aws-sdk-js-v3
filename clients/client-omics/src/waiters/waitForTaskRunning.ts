// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetRunTaskCommand, GetRunTaskCommandInput } from "../commands/GetRunTaskCommand";
import { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetRunTaskCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetRunTaskCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "RUNNING") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "PENDING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "STARTING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "CANCELLED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a task is running.
 *  @deprecated Use waitUntilTaskRunning instead. waitForTaskRunning does not throw error in non-success cases.
 */
export const waitForTaskRunning = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetRunTaskCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a task is running.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRunTaskCommand for polling.
 */
export const waitUntilTaskRunning = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetRunTaskCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
