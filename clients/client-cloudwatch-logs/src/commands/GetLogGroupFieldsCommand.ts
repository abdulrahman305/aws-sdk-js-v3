// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { GetLogGroupFieldsRequest, GetLogGroupFieldsResponse } from "../models/models_0";
import { de_GetLogGroupFieldsCommand, se_GetLogGroupFieldsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLogGroupFieldsCommand}.
 */
export interface GetLogGroupFieldsCommandInput extends GetLogGroupFieldsRequest {}
/**
 * @public
 *
 * The output of {@link GetLogGroupFieldsCommand}.
 */
export interface GetLogGroupFieldsCommandOutput extends GetLogGroupFieldsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the fields that are included in log events in the specified log group.
 *       Includes the percentage of log events that contain each field. The search is limited to a time
 *       period that you specify.</p>
 *          <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>.
 *       You must specify one of these parameters, but you can't specify both.
 *     </p>
 *          <p>In the results, fields that start with <code>@</code> are fields generated by CloudWatch
 *       Logs. For example, <code>@timestamp</code> is the timestamp of each log event. For more
 *       information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported
 *         Logs and Discovered Fields</a>.</p>
 *          <p>The response results are sorted by the frequency percentage, starting
 *     with the highest percentage.</p>
 *          <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and
 *       view data from the linked source accounts. For more information, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogGroupFieldsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogGroupFieldsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetLogGroupFieldsRequest
 *   logGroupName: "STRING_VALUE",
 *   time: Number("long"),
 *   logGroupIdentifier: "STRING_VALUE",
 * };
 * const command = new GetLogGroupFieldsCommand(input);
 * const response = await client.send(command);
 * // { // GetLogGroupFieldsResponse
 * //   logGroupFields: [ // LogGroupFieldList
 * //     { // LogGroupField
 * //       name: "STRING_VALUE",
 * //       percent: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLogGroupFieldsCommandInput - {@link GetLogGroupFieldsCommandInput}
 * @returns {@link GetLogGroupFieldsCommandOutput}
 * @see {@link GetLogGroupFieldsCommandInput} for command's `input` shape.
 * @see {@link GetLogGroupFieldsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class GetLogGroupFieldsCommand extends $Command<
  GetLogGroupFieldsCommandInput,
  GetLogGroupFieldsCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetLogGroupFieldsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLogGroupFieldsCommandInput, GetLogGroupFieldsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLogGroupFieldsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "GetLogGroupFieldsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "GetLogGroupFields",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetLogGroupFieldsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLogGroupFieldsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLogGroupFieldsCommandOutput> {
    return de_GetLogGroupFieldsCommand(output, context);
  }
}
